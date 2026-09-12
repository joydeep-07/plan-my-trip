import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";
import TravelPackages from "./pages/TravelPackages";

import LenisScroll from "./utils/Lenis";

const App = () => {
  return (
    <BrowserRouter>
      <LenisScroll />

      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/travel-packages" element={<TravelPackages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
