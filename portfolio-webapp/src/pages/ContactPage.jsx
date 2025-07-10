import React from 'react';

const ContactPage = () => {
    return (
        // Main container for the Contact Page, similar to AboutPage
        <div className="flex-grow flex flex-col justify-between items-start
                    bg-blue-900 text-white font-inter p-6 md:p-8 lg:p-12 min-h-screen">

            {/* Top Section: "Let's create something unforgettable" */}
            <div className="mb-12 md:mb-20 lg:mb-24">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
                    Let's create something <br className="hidden md:block" /> unforgettable
                </h1>
            </div>

            {/* Middle Section: Contact Form and Get in Touch details */}
            <div className="flex flex-col md:flex-row justify-between w-full mb-12 md:mb-20 lg:mb-24">
                {/* Left Column: Send a message (Form) */}
                <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-light mb-6">Send a message</h2>
                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 placeholder:italic text-left bg-primary border-b-2 border-primary focus:border-text focus:bg-primary focus:shadow-lg focus:ring-2 focus:ring-text outline-none pb-2 text-lg px-4 focus:text-text text-text"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 placeholder:italic bg-primary border-b-2 border-primary focus:border-text focus:bg-primary focus:shadow-lg focus:ring-2 focus:ring-text outline-none pb-2 text-lg px-4 focus:text-text text-text"
                            />
                        </div>
                        <textarea
                            placeholder="Your message..."
                            className="w-full placeholder:italic place-content-baseline bg-primary border-b-2 border-primary focus:border-text  focus:shadow-lg focus:ring-2 focus:ring-text outline-none pb-2 text-lg resize-y px-4 focus:text-text text-text"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-6 px-6 py-3 bg-primary border text-white font-light rounded-full
                         hover:bg-text hover:text-primary transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Column: Get in touch details */}
                <div className="w-full md:w-1/2 pl-0 md:pl-12">
                    <h2 className="text-2xl md:text-3xl font-light mb-6">Get in touch</h2>
                    <div className="space-y-2 text-lg md:text-xl">
                        <p>
                            <a href="mailto:hi@mikailsari.com" className="text-white hover:text-gray-400 transition-colors underline">hi@mikailsari.com</a>
                        </p>
                        <p>+31 6 123 4567</p> {/* Example phone number */}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Footer-like content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full text-sm text-gray-400 mt-auto">
                <div className="mb-2 md:mb-0">
                    Mikail Sari © 2025
                </div>
                <div className="text-right">
                    Mikail Sari Digital Design KVK: 12345678
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
