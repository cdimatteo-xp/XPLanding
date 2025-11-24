import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Training from './components/Training';
import Industries from './components/Industries';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="font-sans text-slate-700 bg-slate-50 scroll-smooth">
            <Navbar />
            <Hero />
            <Services />
            <Products />
            <Industries />
            <Training />
            <About />
            <Careers />
            <Contact />
            <Footer />
        </div>
    );
}
