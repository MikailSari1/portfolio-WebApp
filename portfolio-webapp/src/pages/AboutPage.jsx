import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-0"> {/* Added px-4 for mobile padding */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-inter">About</h1>

            {/* About Me Section */}
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">About Me</h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                    Hello! I'm Mikail Sari, a passionate brand designer dedicated to crafting compelling visual identities that resonate with audiences and drive business growth. My journey in design began with a fascination for how powerful storytelling can be conveyed through aesthetics and strategic thinking.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I believe in a collaborative approach, working closely with clients to understand their vision and translate it into impactful design solutions. My goal is to create brands that not only look exceptional but also effectively communicate their unique value proposition.
                </p>
            </div>

            {/* Experience Section */}
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Experience Item 1 */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Lead Brand Designer</h3>
                        <p className="text-gray-400 text-lg mb-1">Creative Solutions Agency | 2020 - Present</p>
                        <ul className="list-disc list-inside text-gray-300 text-base">
                            <li>Led brand identity projects from concept to execution for diverse clients.</li>
                            <li>Mentored junior designers and fostered a collaborative team environment.</li>
                            <li>Developed comprehensive brand guidelines and visual systems.</li>
                        </ul>
                    </div>
                    {/* Experience Item 2 */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Graphic Designer</h3>
                        <p className="text-gray-400 text-lg mb-1">Innovate Design Studio | 2017 - 2020</p>
                        <ul className="list-disc list-inside text-gray-300 text-base">
                            <li>Designed marketing collateral, digital assets, and print materials.</li>
                            <li>Assisted in client presentations and project ideation.</li>
                            <li>Contributed to various branding and re-branding initiatives.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">Contact</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-4">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                </p>
                <p className="text-xl md:text-2xl font-semibold">
                    Email: <a href="mailto:info@mikailsari.com" className="text-white hover:text-gray-400 transition-colors underline">info@mikailsari.com</a>
                </p>
                <p className="text-xl md:text-2xl font-semibold mt-2">
                    LinkedIn: <a href="https://www.linkedin.com/in/mikailsari" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors underline">/in/mikailsari</a>
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
