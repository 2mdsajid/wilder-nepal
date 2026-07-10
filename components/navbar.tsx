'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Waves } from 'lucide-react';
import content from '@/src/data/content.json';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${content.company.whatsappNumber}?text=Hi%20Wilder%20Nepal!%20I%27d%20love%20to%20find%20out%20more.`;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/kayaking', label: 'Kayaking' },
    { href: '/stand-up-paddle', label: 'SUP' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              scrolled ? 'bg-forest-700' : 'bg-white/20 backdrop-blur-sm'
            }`}
          >
            <Waves
              className={`w-4 h-4 transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-white'
              }`}
            />
          </div>
          <span
            className={`font-display text-lg font-normal tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-forest-800' : 'text-white'
            }`}
          >
            Wilder Nepal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${
                scrolled ? 'text-stone-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-700 hover:bg-forest-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-forest-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-6 pt-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-stone-700 hover:text-forest-700 border-b border-border last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 w-full text-center bg-forest-700 hover:bg-forest-800 text-white font-medium px-5 py-3 rounded-full transition-colors"
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
