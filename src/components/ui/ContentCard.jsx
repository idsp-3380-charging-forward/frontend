export default function ContentCard({ title, children }) {
    return (
        <section className='c-card'>
            <h2 className='card-title'>{title}</h2>
            {children}
        </section>
    );
}