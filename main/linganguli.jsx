import React, { useState, useEffect } from 'react';

// You would typically include your CSS in a separate file (e.g., index.css or App.css)
// and import it. For the blinking cursor animation, ensure this CSS is available:
/*
@keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
}

.blinking-cursor {
    animation: blink 0.75s step-end infinite;
}
*/

// Main App component
const App = () => {
    // Array of phrases to display, including greetings and short statements
    const phrases = [
        "Hello there.",
        "Hola.",
        "Bonjour.",
        "Hallo.",
        "Ciao.",
        "Olá.",
        "你好.",
        "こんにちは.",
        "안녕하세요.",
        "Привет.",
        "नमस्ते.",
        "Merhaba.",
        "สวัสดี.",
        "مرحبا.",
        "שלום.",
    ];

    // State for the index of the current phrase in the 'phrases' array
    const [phraseIndex, setPhraseIndex] = useState(0);
    // State for the currently displayed text (character by character)
    const [typedText, setTypedText] = useState('');
    // State to determine if characters are being deleted or typed
    const [isDeleting, setIsDeleting] = useState(false);
    // State for the typing speed (milliseconds per character)
    const [typingSpeed, setTypingSpeed] = useState(100);
    // State to control the visibility of the intro screen
    const [showIntro, setShowIntro] = useState(true);

    // useEffect hook to manage the typing and deleting animation
    useEffect(() => {
        // Only run typing effect if intro is still shown
        if (!showIntro) return;

        const currentPhrase = phrases[phraseIndex];
        let timeout;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward: add one character at a time
                setTypedText(currentPhrase.substring(0, typedText.length + 1));
                setTypingSpeed(100); // Normal typing speed

                if (typedText.length === currentPhrase.length) {
                    // Phrase fully typed, now prepare to delete after a pause
                    setTypingSpeed(1500); // Pause before deleting
                    setIsDeleting(true);
                }
            } else {
                // Deleting backward: remove one character at a time
                setTypedText(currentPhrase.substring(0, typedText.length - 1));
                setTypingSpeed(50); // Faster deleting speed

                if (typedText.length === 0) {
                    // Phrase fully deleted, move to the next phrase
                    setIsDeleting(false);
                    // Cycle to the next phrase, wrapping around to the beginning if at the end
                    setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                    setTypingSpeed(500); // Pause before typing the next phrase
                }
            }
        };

        // Set a timeout to call handleTyping based on the current typingSpeed
        timeout = setTimeout(handleTyping, typingSpeed);

        // Cleanup function: Clear the timeout when the component unmounts or dependencies change
        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, phraseIndex, typingSpeed, phrases, showIntro]); // Dependencies for the effect

    // useEffect hook to handle user interaction and fade out the intro
    useEffect(() => {
        const handleInteraction = () => {
            setShowIntro(false); // Hide the intro screen on any interaction
        };

        // Add event listeners for mouse movement and key presses
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('click', handleInteraction); // Also listen for clicks

        // Cleanup function: Remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('click', handleInteraction);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            {/* Intro Screen - conditionally rendered and animated */}
            <div
                className={`fixed inset-0 flex items-center justify-center bg-gray-900 text-white p-4
                    transition-opacity duration-1000 ease-out z-50
                    ${showIntro ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="text-center max-w-2xl w-full">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-inter">
                        {typedText}
                        {/* Blinking cursor element - now a pipe character */}
                        <span className="blinking-cursor">|</span>
                    </h1>
                </div>
            </div>

            {/* Main Website Content - hidden until intro fades out */}
            <div
                className={`min-h-screen bg-gray-800 text-white flex items-center justify-center
                    transition-opacity duration-1000 ease-out
                    ${showIntro ? 'opacity-0' : 'opacity-100'}`}
            >
                <div className="text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Main Website!</h2>
                    <p className="text-lg md:text-xl max-w-xl mx-auto">
                        This is where your primary content would go. Interact with the page to make the intro screen disappear.
                    </p>
                    <p className="mt-8 text-md text-gray-400">
                        (You can replace this section with your actual website components.)
                    </p>
                </div>
            </div>
        </>
    );
};

export default App;
