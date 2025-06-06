const teamMembers = [
    {
        name: "Łukasz Zalewski",
        position: "Lead Backend Developer",
        description: "Computer science student specializing in backend development.",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name: "Mateusz Kozieł",
        position: "Lead Frontened Developer",
        description: "Computer science student specializing in frontend development",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
        name: "Mateusz Wójcik",
        position: "Lead Backend Developer",
        description: "Computer science student specializing in backend development.",
        avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }
];

const TeamSection = () => {
    return (
        <section className="py-16 mx-10 sm:mx-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                    Meet Our Team
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    The passionate individuals behind our success, dedicated to bringing you the best in electronics
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="relative inline-block mb-4">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-accent1/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-semibold text-dark mb-2">
                            {member.name}
                        </h3>
                        <p className="text-accent1 font-medium mb-3">
                            {member.position}
                        </p>
                        <p className="text-gray-600 text-sm">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TeamSection