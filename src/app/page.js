import { fetchPage } from '../api/services/pages';
import { WP_SLUGS } from '../constants/routes';

export default async function Home() {
  try {
    const pageData = await fetchPage(WP_SLUGS.HOME);

    if (!pageData) return <div>No content found</div>;

    return (
      <main>
        <h1>{pageData.title?.rendered}</h1>
        <article dangerouslySetInnerHTML={{ __html: pageData.content?.rendered }} />
      </main>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}