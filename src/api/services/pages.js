import apiClient from '../client'

export async function fetchPage(slug) {
    const data = await apiClient(`/pages?slug=${slug}`)
    return data[0] || null
}