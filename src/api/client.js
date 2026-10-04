const BASE_URL = import.meta.env.VITE_WP_API

export default async function apiClient(endpoint, options = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        })

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`)
        }

        return await response.json()
    } catch (error) {
        console.error('WordPress API fetch error:', error)
        throw error
    }
}