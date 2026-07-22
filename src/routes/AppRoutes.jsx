import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Materials from '../pages/Materials/Materials';
import Services from '../pages/Services/Services';
import WhyChooseUs from '../pages/WhyChooseUs/WhyChooseUs';
import Contact from '../pages/Contact/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="materials" element={<Materials />} />
        <Route path="services" element={<Services />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
