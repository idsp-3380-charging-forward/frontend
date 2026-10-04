import { useEffect, useState } from 'react'
import { fetchPosts } from '../api/services/posts'

export default function News() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchPosts(10)
                setPosts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadPosts()
    }, [])

    if (loading) return <div>Loading posts...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <section>
            <h2>News & Events</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title?.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }} />
                    </li>
                ))}
            </ul>
        </section>
    )
}