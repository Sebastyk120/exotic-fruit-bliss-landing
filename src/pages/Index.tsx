
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links with enhanced animation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Intersection Observer for animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Setting up animations for sections
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in');
    animatedElements.forEach(el => {
      observer.observe(el);
      el.classList.add('opacity-0'); // Ensure they start invisible
    });
    
    // Add animated backgrounds
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index % 2 === 0) {
        section.classList.add('animated-bg-1');
      } else {
        section.classList.add('animated-bg-2');
      }
    });
    
    // Update title
    document.title = "L&M Exotic Fruits | Importación de Frutas Exóticas";

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
