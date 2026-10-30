const cards = [
    {
        id: 1,
        title: "Card One",
        description: "This is a 5 star review.",
    },

    {
        id: 2,
        title: "Card Two",
        description: "This is a 4.5 star review.",
    },

    {
        id: 3,
        title: "Card Three",
        description: "This is a 5 star review and testimonial.",
    },
];

// Styles will move to a CSS file after coordinating with the team. -- BRANCH WAS PUSHED TO GIT BUT CODE WAS NOT
export default function CardCarousel() {
    return (
        <section>
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px",
                }}>
                {cards.map((card) => (
                    <article
                        key={card.id}
                        style={{
                            flex: "0 0 280px",
                            maxWidth: "100%",
                            padding: "24px",
                        }}>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
