const AboutContent = () => {
    return (
        <section className="py-16 mx-10 sm:mx-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                        Innovation Meets Excellence
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Founded with a vision to revolutionize the electronics industry, we've been at the forefront of technological advancement for over a decade. Our commitment to quality, innovation, and customer satisfaction drives everything we do.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From cutting-edge smartphones to state-of-the-art home automation systems, we curate only the finest electronics that enhance your digital lifestyle. Every product in our collection undergoes rigorous testing to ensure it meets our exceptional standards.
                    </p>
                    <div className="pt-4">
                        <h3 className="text-xl font-semibold text-dark mb-3">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower individuals and businesses with innovative electronic solutions that simplify life, boost productivity, and inspire creativity in an ever-evolving digital world.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-gradient-to-br from-accent1/10 to-accent1-hover/10 rounded-2xl p-8 shadow-lg">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent1 mb-2">10+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent1 mb-2">50K+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent1 mb-2">1000+</div>
                                <div className="text-gray-600">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent1 mb-2">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent