import React, { useState, useEffect } from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
        >
            <BsArrowUpCircle className="icon-up" size={32} />
        </button>
    );
};

export default ScrollToTopButton;
