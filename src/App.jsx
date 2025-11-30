import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Training2 from './components/Training2';
import ContactPage from './components/ContactPage';
import Campus from './components/Campus';
import SubscriptionPanel from './components/SubscriptionPanel';
import Footer from './components/Footer';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Layout = ({ children }) => {
    const location = useLocation();
    // Ocultar Navbar y Footer si estamos en rutas privadas/standalone
    const isStandalone = location.pathname.startsWith('/campus') || location.pathname.startsWith('/suscripcion');

    return (
        <div className="font-sans text-slate-700 bg-slate-50 scroll-smooth">
            {!isStandalone && <Navbar />}
            {children}
            {!isStandalone && <Footer />}
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/academia" element={<Training2 />} />
                    <Route path="/campus" element={<Campus />} />
                    <Route path="/suscripcion" element={<SubscriptionPanel />} />
                    <Route path="/contacto" element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}
