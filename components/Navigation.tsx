'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import throttle from 'lodash.throttle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Throttle scroll handler to run at most once every 100ms
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      handleScroll.cancel(); // Cancel any pending throttled calls
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#edificio', label: 'Edificio' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#plantas', label: 'Plantas' },
    { href: '#galeria', label: 'Galería' },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg' : 'bg-white/95 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-actitud.png"
              alt="Actitud"
              width={200}
              height={60}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-dark-gray hover:text-primary-blue transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="bg-primary-blue text-white px-6 py-3 rounded hover:bg-primary-dark-blue transition-all duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              mobileMenuOpen
                ? 'bg-primary-blue text-white rotate-90'
                : 'text-dark-gray hover:bg-light-gray hover:text-primary-blue'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg
              className="w-8 h-8 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 bg-gradient-to-b from-white to-light-gray/30 border-t border-primary-blue/20 shadow-lg animate-fade-in">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  style={{
                    animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`
                  }}
                >
                  <a
                    href={link.href}
                    className="block py-3 px-4 text-dark-gray hover:text-primary-blue hover:bg-white hover:shadow-md rounded-lg transition-all duration-300 font-medium active:scale-95"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li
                className="mt-3"
                style={{
                  animation: 'slideInRight 0.3s ease-out 0.25s both'
                }}
              >
                <a
                  href="#contacto"
                  className="block bg-gradient-to-r from-primary-blue to-primary-dark-blue text-white px-6 py-4 rounded-lg text-center hover:shadow-xl transition-all duration-300 font-semibold active:scale-95 hover:from-primary-dark-blue hover:to-primary-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
