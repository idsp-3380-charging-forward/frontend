import { useEffect, useState } from 'react'
import { fetchPage } from '../api/services/pages'
import { WP_SLUGS } from '../constants/routes'

export default function Home() {
    const [pageData, setPageData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPage = async () => {
            try {
                const data = await fetchPage(WP_SLUGS.HOME)
                setPageData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadPage()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!pageData) return <div>No content found</div>

    return (
        <main>
            <h1>{pageData.title?.rendered}</h1>
            <article dangerouslySetInnerHTML={{ __html: pageData.content?.rendered }} />
        </main>
    )
}