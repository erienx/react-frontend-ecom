const ContactHero = () => {
    return (
        <div className="relative h-[40vh] w-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative text-center px-4 max-w-4xl">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Get In Touch
                </h1>
                <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>
        </div>
    )
}

export default ContactHero