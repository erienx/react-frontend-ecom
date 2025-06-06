const statsData = [
    {
        number: "500K+",
        label: "Orders Delivered",
        description: "Successfully delivered worldwide"
    },
    {
        number: "98%",
        label: "Customer Satisfaction",
        description: "Based on customer reviews"
    },
    {
        number: "50+",
        label: "Brand Partners",
        description: "Leading technology brands"
    },
    {
        number: "24h",
        label: "Fast Shipping",
        description: "Express delivery available"
    }
];

const CompanyStats = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-10 sm:mx-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark mb-12">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="text-4xl font-bold text-accent1 mb-3">
                                {stat.number}
                            </div>
                            <h3 className="text-xl font-semibold text-dark mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CompanyStats