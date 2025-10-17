'use client';
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/75 flex items-center backdrop-blur-lg">
       {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image
                src={'/images/bb-logo.png'}
                height={120}
                width={120}
                alt='logo'
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-[#06402B] transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#06402B] transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-[#06402B] transition-colors">About</a>
              <button className="px-6 py-2 rounded-lg text-white transition-transform hover:scale-105" style={{backgroundColor: '#06402B'}}>
                Get Started
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg mt-4 py-4 px-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-[#06402B]">Features</a>
            <a href="#pricing" className="block text-gray-700 hover:text-[#06402B]">Pricing</a>
            <a href="#about" className="block text-gray-700 hover:text-[#06402B]">About</a>
            <button className="w-full px-6 py-2 rounded-lg text-white" style={{backgroundColor: '#06402B'}}>
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}