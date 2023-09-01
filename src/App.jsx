import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./layout/Layout";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Products from "./pages/products/ProductsPage";
import Collections from "./pages/collections/CollectionsPage";
import Contact from "./pages/contact/ContactPage";
import Myaccount from './pages/account/MyAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myaccount" element={<Myaccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
