
const HeroSection = () => {
    return (
        <div className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-img.jpg')" }}>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl leading-tight sm:text-[64px] sm:leading-[76px]">
                    Upgrade Your Gear – Experience the Future of Electronics
                </h1>
            </div>
        </div>
    )
}

export default HeroSection