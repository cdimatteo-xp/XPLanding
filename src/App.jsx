import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Products from './components/Products';
import Training from './components/Training';
import News from './components/News';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="font-sans text-slate-700 bg-slate-50 scroll-smooth">
            <Navbar />
            <Hero />
            <Partners />
            <Services />
            <Products />
            <Training />
            <News />
            <About />
            <Careers />
            <Contact />
            <Footer />
        </div>
    );
}
