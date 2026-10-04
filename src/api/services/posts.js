import apiClient from '../client'

export async function fetchPosts(limit = 50) {
    return await apiClient(`/posts?per_page=${limit}`)
}