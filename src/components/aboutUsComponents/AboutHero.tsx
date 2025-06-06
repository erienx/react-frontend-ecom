const AboutHero = () => {
    return (
        <div className="relative h-[50vh] w-full bg-gradient-to-br from-accent1 to-accent1-hover flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative text-center px-4 max-w-4xl">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    About Our Story
                </h1>
                <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
                    Discover the passion and innovation behind our electronics revolution
                </p>
            </div>
        </div>
    )
}

export default AboutHero