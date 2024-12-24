import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Products from './Products/Products';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
    );
};

export default Router;
