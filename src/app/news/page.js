import { fetchPosts } from '../../api/services/posts';

export default async function News() {
    try {
        const posts = await fetchPosts(10);

        if (!posts || posts.length === 0) {
            return <div>No posts found.</div>;
        }

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
        );
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }
}