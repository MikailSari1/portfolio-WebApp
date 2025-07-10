import React from 'react';

const AboutPage = () => {
    return (
        // De hoofdcontainer van de AboutPage, nu met marineblauwe achtergrond en witte tekst
        // en een flex-grow om de beschikbare ruimte in te nemen.
        <div className="flex-grow flex flex-col justify-center items-start
                        text-white font-inter p-6 md:p-8 lg:p-12">

            {/* Hoofdtitel "Nice to meet you" - groter en met meer witruimte */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 lg:mb-16 tracking-tight">
                Nice to meet you
            </h1>

            {/* Tekstblokken onder de titel */}
            <div className="max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6">
                <p>
                    I'm Mikail Sari, a brand designer from the vibrant city of Amsterdam. I specialize in branding and
                    web
                    design, helping businesses worldwide to stand out with memorable visuals.
                </p>
                <p>
                    From crafting sleek logos to building full-scale brand identities, my primary focus lays on designs
                    that are both visually pleasing and differ from your competitors.
                </p>
                <p>
                    Outside of design, I love unique culinary experiences, reading books and playing the guitar.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
