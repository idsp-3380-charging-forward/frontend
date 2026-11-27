import { fetchPage } from "../api/services/pages";
import { WP_SLUGS } from "../constants/routes";
import ContentCard from "../components/ui/ContentCard";
import placeholder from '../assets/JulesTheOtterChatIcon.svg'


export default async function Home() {
    return (
        <>
            <div className='c-card-container'>
                <ContentCard title='this is a content card'>
                    <div className='text-container'>
                        <p>this is content in the card</p>
                    </div>
                </ContentCard>
                <ContentCard title='this is also a title'>
                    <div className='text-container'>
                        <p>this is content in the card</p>
                    </div>
                </ContentCard>
            </div>
        </>
    );
    // try {
    //     const pageData = await fetchPage(WP_SLUGS.HOME);

    //     if (!pageData) return <div>No content found</div>;

    //     return (
    //         <main>

    //             <h1>{pageData.title?.rendered}</h1>
    //             <article
    //                 dangerouslySetInnerHTML={{
    //                     __html: pageData.content?.rendered,
    //                 }}
    //             />
    //         </main>
    //     );
    // } catch (error) {
    //     return <div>Error: {error.message}</div>;
    // }
}
