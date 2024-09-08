'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ResumeButton from '../downloadButton/DownloadButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection); // Attach the scroll listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // Cleanup on component unmount
    };
  }, [scrollDirection]);

  return (
    <nav className={`${styles.navbar} ${scrollDirection === 'down' ? styles.hideNavbar : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>Simon Kern</Link>
        </div>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
