
const newsItems = [
    {
        date: "01 Jan, 2015",
        title: "Fashion Industry",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", // logo Nike z netu
        alt: "Nike logo",
    },
    {
        date: "01 Jan, 2015",
        title: "Best Design Tools",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", // logo Figma
        alt: "Design tools logo",
    },
    {
        date: "01 Jan, 2015",
        title: "HR Community",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Kronos_logo.svg", // logo Kronos
        alt: "Kronos logo",
    },
];

const LatestNews = () => {
    return (
        <section style={{ textAlign: "center", padding: "30px 0" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>LATEST NEWS</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
                {newsItems.map(({ date, title, description, logo, alt }, index) => (
                    <div key={index} style={{ maxWidth: 250, textAlign: "left" }}>
                        <img src={logo} alt={alt} style={{ width: "60px", marginBottom: "15px" }} />
                        <p style={{ color: "#a0a8b9", fontSize: "14px", marginBottom: "5px" }}>{date}</p>
                        <h3 style={{ fontWeight: "600", marginBottom: "10px" }}>{title}</h3>
                        <p style={{ fontSize: "14px", margin: 0 }}>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
