import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import SimpleHome from './components/landing/SimpleHome';
import Products from './components/productos/Products';
import Training from './components/academia/Training';
import ContactPage from './components/landing/Contact';
import Campus from './components/campus/Campus';
import SubscriptionPanel from './components/suscripcion/SubscriptionPanel';
import ProductDemo from './components/productos/ProductDemo';
import Footer from './components/layout/Footer';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Layout = ({ children }) => {
    const location = useLocation();
    
    // Rutas que tienen su propio layout o son "standalone"
    const hideNavAndFooter = 
        location.pathname === '/' || 
        location.pathname === '/demo' ||
        location.pathname.startsWith('/campus') || 
        location.pathname.startsWith('/suscripcion');

    return (
        <div className="font-sans text-slate-700 bg-slate-50 scroll-smooth">
            {!hideNavAndFooter && <Navbar />}
            {children}
            {!hideNavAndFooter && <Footer />}
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<SimpleHome />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/academia" element={<Training />} />
                    <Route path="/campus" element={<Campus />} />
                    <Route path="/suscripcion" element={<SubscriptionPanel />} />
                    <Route path="/contacto" element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
