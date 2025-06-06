const ContactMap = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-10 sm:mx-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-dark mb-4">
                        Find Us Here
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Visit our store in the heart of Warsaw's tech district
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                        {/* Placeholder for map - in real implementation you'd use Google Maps or similar */}
                        <div className="text-center text-gray-500">
                            <div className="text-4xl mb-4">🗺️</div>
                            <p className="text-lg font-medium">Interactive Map</p>
                            <p className="text-sm">123 Electronics Street, Warsaw</p>
                            <div className="mt-4 space-x-4">
                                <button className="bg-accent1 hover:bg-accent1-hover text-white px-4 py-2 rounded-lg transition-colors duration-200">
                                    Get Directions
                                </button>
                                <button className="border border-accent1 text-accent1 hover:bg-accent1 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200">
                                    View on Google Maps
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="font-semibold text-dark mb-1">Parking</h3>
                                <p className="text-gray-600 text-sm">Free parking available</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-dark mb-1">Public Transport</h3>
                                <p className="text-gray-600 text-sm">Metro station 2 min walk</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-dark mb-1">Accessibility</h3>
                                <p className="text-gray-600 text-sm">Wheelchair accessible</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMap