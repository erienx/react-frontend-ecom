const newsItems = [
    {
        date: "01 Jan, 2015",
        title: "Fashion Industry",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        alt: "Nike logo",
    },
    {
        date: "01 Jan, 2015",
        title: "Best Design Tools",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        alt: "Figma logo",
    },
    {
        date: "01 Jan, 2015",
        title: "HR Community",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
        alt: "Kronos logo",
    },
];

const LatestNews = () => {
    return (
        <section style={{ textAlign: "center", padding: "30px 0" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px", fontSize: "1.5rem" }}>
                LATEST NEWS
            </h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "80px",
                flexWrap: "wrap"
            }}>
                {newsItems.map((item, index) => (
                    <div key={index} style={{ maxWidth: "250px", textAlign: "left" }}>
                        <img
                            src={item.logo}
                            alt={item.alt}
                            style={{
                                width: "60px",
                                height: "auto",
                                marginBottom: "15px"
                            }}
                        />
                        <p style={{
                            color: "#a0a8b9",
                            fontSize: "14px",
                            marginBottom: "5px"
                        }}>
                            {item.date}
                        </p>
                        <h3 style={{
                            fontWeight: "600",
                            marginBottom: "10px",
                            fontSize: "1.1rem"
                        }}>
                            {item.title}
                        </h3>
                        <p style={{
                            fontSize: "14px",
                            margin: "0",
                            lineHeight: "1.4"
                        }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;