import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

// IMPORTANT: For the blinking cursor animation, ensure this CSS is available
// in your project's global stylesheet (e.g., src/index.css or src/App.css):
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
        "Hello.",
        "Hola.",
        "Bonjour.",
        "Merhaba.",
        "Hallo.",
        "Ciao.",
        "Olá.",
        "你好.",
        "こんにちは.",
        "안녕하세요.",
        "Привет.",
        "नमस्ते.",
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
    // State to track the current page (for navigation highlighting)
    const [currentPage, setCurrentPage] = useState('home');
    // Function to handle navigation (for future use)
    const navigateTo = (page) => {
        setCurrentPage(page);
        // Here you would typically use a routing library like React Router
        // to navigate to the appropriate page, e.g., history.push('/about');
    }

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
            console.log('Interaction detected! Hiding intro.'); // Add this line
            setShowIntro(false); // Hide the intro screen on any interaction
        };

        // Introduce a small delay before attaching event listeners
        // This gives the component time to render the intro before any quick
        // initial interactions (like a very fast mouse movement on page load)
        // can trigger the fade-out.
        const delayTimeout = setTimeout(() => {
            window.addEventListener('mousemove', handleInteraction);
            window.addEventListener('keydown', handleInteraction);
            window.addEventListener('click', handleInteraction);
            console.log('Event listeners attached.'); // Added for debugging
        }, 500); // Delay for 500 milliseconds (0.5 seconds)

        // Cleanup function: Remove event listeners and clear the delay timeout
        return () => {
            clearTimeout(delayTimeout); // Clear the delay timeout if component unmounts early
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('click', handleInteraction);
            console.log('Event listeners removed.'); // Added for debugging
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <Router>
            {/* Intro Screen - conditionally rendered and animated */}
            <div
                className={`fixed inset-0 flex items-center justify-center bg-primary text-text p-4
                transition-opacity duration-1000 ease-out z-50
                ${showIntro ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="text-center max-w-2xl w-full text-text">
                    {/* Changed font-extrabold to font-light for thinner text */}
                    <h1 className="text-text text-5xl md:text-7xl lg:text-8xl font-light tracking-tight font-inter">
                        {typedText}
                        {/* Blinking cursor element - now a pipe character */}
                        <span className="blinking-cursor">|</span>
                    </h1>
                </div>
            </div>

            {/* Main Website Content - hidden until intro fades out */}
            <div
                className={`min-h-screen bg-primary text-text flex flex-col
                transition-opacity duration-1000 ease-out
                ${showIntro ? 'opacity-0' : 'opacity-100'}`}
            >
                {/* Header Section */}
                <header className="flex justify-between items-center p-6 md:p-8 w-full">
                    {/* Left: Name/Logo */}
                    <div className="text-xl md:text-2xl font-bold font-inter text-text">
                        Mikail Sari
                    </div>
                    {/* Right: Navigation Links */}
                    <nav className="hidden md:block">
                        {/* Hidden on small screens, block on medium+ */}
                        <ul className="text-text flex space-x-6 lg:space-x-10 text-lg">
                            <li><Link to="/" className="text-text hover:text-gray-400 transition-colors">Home</Link>
                            </li>
                            <li><a href="#" className="text-text hover:text-gray-400 transition-colors">Projects</a>
                            </li>
                            <li><Link to="/about"
                                      className={"text-text hover:text-gray-400 transition-colors ${window.location.pathname === '/about' ? 'font-bold' : ''}"}>About</Link>
                            </li>
                            <li><Link to="/contact"
                                      className={"text-text hover:text-gray-400 transition-colors ${window.location.pathname === '/contact' ? 'font-bold' : ''}"}>Contact</Link></li>
                        </ul>
                    </nav>
                    {/* Mobile Menu Icon (Placeholder for future implementation) */}
                    <div className="text-text md:hidden text-2xl">
                        ☰ {/* You might replace this with an actual icon */}
                    </div>
                </header>

                {/* Main Content Area (empty for now, but ready for your components) */}
                <main className="text-text flex-grow flex items-center justify-center p-4">
                    <Routes>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/contact" element={<ContactPage/>}/>
                        <Route path="/projects" element={<ProjectsPage/>}/>
                        <Route path="/" element={<div/>}/>
                    </Routes>
                </main>

                {/* Footer Section */}
                <footer
                    className="text-text flex flex-col md:flex-row justify-between items-start md:items-end p-6 md:p-8 w-full">
                    {/* Bottom Left */}
                    <div className="text-text mb-4 md:mb-0">
            <span
                className="text-text inline-block px-3 py-1 text-sm md:text-base border border-gray-600 rounded-full text-gray-400">
              Available for inquiries
            </span>
                    </div>
                    {/* Bottom Right */}
                    <div className="text-text text-right max-w-sm">
                        <p className="text-sm md:text-base mb-2 text-text">
                            Code Developer based in the Netherlands.
                        </p>
                        <a href="contact"
                           className=" text-md md:text-lg font-bold hover:text-gray-400 transition-colors flex items-center justify-end">
                            Interested ?
                            <span className="ml-2">→</span> {/* Right arrow */}
                        </a>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;