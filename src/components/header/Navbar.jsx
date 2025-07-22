import { useState, useEffect } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import './navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    const links = [
        { name: "Home", link: "home" },
        { name: "About", link: "about" },
        { name: "Project", link: "project" },
        { name: "Contact", link: "contact" }
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav className="nav-menu">
                <a href="#home"><h3>Hirwa Cardinal Loic</h3></a>

                {/* Nav Links - always visible on large screens */}
                <ul className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
                    <li className="close-icon">
                        <button onClick={toggleMenu} className="nav-btn close">
                            <FaXmark />
                        </button>
                    </li>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                spy
                                offset={-140}
                                onClick={() => menuOpen && toggleMenu()} // only close on mobile
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger menu - only visible on small screens */}
                <button onClick={toggleMenu} className="nav-btn hamburg-menu">
                    <FaBarsStaggered />
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
