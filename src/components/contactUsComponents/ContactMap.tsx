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
                    <div className="relative h-96">
                        <iframe
                            title="Politechnika Łódzka"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1340629568383!2d19.4491427!3d51.7537146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34d85d1152f3%3A0xbe75c3beee4bad56!2sPolitechnika%20%C5%81%C3%B3dzka!5e0!3m2!1spl!2spl!4v1718016712"
                            width="100%"
                            height="100%"
                            // allowFullScreen=""
                            loading="lazy"
                            style={{border: 0}}
                            referrerPolicy="no-referrer-when-downgrade"
                        />
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