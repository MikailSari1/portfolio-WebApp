import React, { useState, useEffect, useRef } from 'react';
import AboutPage from './pages/AboutPage'

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
    "Hallo.",
    "Merhaba.",
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
  const introShown = useRef(false);
  const [currentPage, setCurrentPage] = useState('home'); // State to track the current page

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
    if (introShown.current) {
      setShowIntro(false);
      return;
    }
    const handleInteraction = () => {
      setShowIntro(false);
      introShown.current = true;
    };

    // Introduce a small delay before attaching event listeners
    // This gives the component time to render the intro before any quick
    // initial interactions (like a very fast mouse movement on page load)
    // can trigger the fade-out.
    const delayTimeout = setTimeout(() => {
      window.addEventListener('mousemove', handleInteraction);
      window.addEventListener('keydown', handleInteraction);
      window.addEventListener('click', handleInteraction);
    }, 500);
    return () => {
      clearTimeout(delayTimeout);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      console.log('Event listeners removed.'); // Added for debugging
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const navigateTo = (page) => {
    setCurrentPage(page); // Function to update the current page state
  };

  return (
      <>
        {/* Intro Screen - conditionally rendered and animated */}
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#202A44] text-white p-4
                    transition-opacity duration-1000 ease-out z-50
                    ${showIntro ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="text-center max-w-2xl w-full">
            {/* Changed font-extrabold to font-light for thinner text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight font-inter">
              {typedText}
              {/* Blinking cursor element - now a pipe character */}
              <span className="blinking-cursor">|</span>
            </h1>
          </div>
        </div>

        {/* Main Website Content - hidden until intro fades out */}
        <div
            className={`min-h-screen bg-[#202A44] text-white flex flex-col
                    transition-opacity duration-700 ease-in
                    ${showIntro ? 'opacity-0' : fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Header Section */}
          <header className="flex justify-between items-center p-6 md:p-8 w-full">
            {/* Left: Name/Logo */}
            <div className="text-xl md:text-2xl font-light font-inter">
              Mikail Sari
            </div>
            {/* Right: Navigation Links */}
            <nav className="hidden md:block"> {/* Hidden on small screens, block on medium+ */}
              <ul className="flex space-x-6 lg:space-x-10 text-lg">
                <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
            {/* Mobile Menu Icon (Placeholder for future implementation) */}
            <div className="md:hidden text-2xl">
              ☰ {/* You might replace this with an actual icon */}
            </div>
          </header>

          {/* Main Content Area (empty for now, but ready for your components) */}
          <main className="flex-grow flex items-center justify-center p-4">
            {/* This is where your main website components would go */}
            {/* For now, it's just a blank space */}
          </main>

          {/* Footer Section */}
          <footer className="flex flex-col md:flex-row justify-between items-start md:items-end p-6 md:p-8 w-full">
            {/* Bottom Left */}
            <div className="mb-4 md:mb-0">
            <span className="inline-block px-3 py-1 text-sm md:text-base border border-gray-600 rounded-full text-gray-400">
              Available for inquiries // Q2
            </span>
            </div>
            {/* Bottom Right */}
            <div className="text-right max-w-sm">
              <p className="text-sm md:text-base mb-2 text-gray-400">
                Freelancer and Web Developer based in the Netherlands.
              </p>
              <a href="#" className="text-white text-md md:text-lg font-bold hover:text-gray-400 transition-colors flex items-center justify-end">
                Interested ?
                <span className="ml-2">→</span> {/* Right arrow */}
              </a>
            </div>
          </footer>
        </div>
      </>
  );
};

export default App;
