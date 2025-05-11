"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    // { href: '/blog', label: 'Blog' },
  ];

  const socialLinks = [
    { href: 'https://github.com/user462138', icon: <Github className="h-5 w-5" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/yazandukhan', icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
    { href: 'mailto:yazandukhan@hotmail.com', icon: <Mail className="h-5 w-5" />, label: 'Email' }
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/">
          <motion.h1 
            className="text-xl md:text-2xl font-heading font-bold neon-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Yazan<span className="text-neon-blue">.</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <motion.span
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  {link.icon}
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden glass-effect py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col space-y-4 px-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.span
                    className="text-muted-foreground hover:text-foreground block py-2"
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-6 mt-6 px-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  {link.icon}
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;