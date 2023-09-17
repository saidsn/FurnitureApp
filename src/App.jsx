import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Products from "./pages/products/ProductsPage";
import Collections from "./pages/collections/CollectionsPage";
import Contact from "./pages/contact/ContactPage";
import Account from "./pages/account/AccountPage";
import AccountLayout from "./components/accountlayout/AccountLayout";
import WishList from "./pages/wishlist/WishListPage";
import RegisterLayout from "./components/registerlayout/RegisterLayout";
import Register from "./pages/register/RegisterPage";
import Login from "./pages/login/LoginPage";
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
        </Route>
        <Route path="/account" element={<AccountLayout />}>
          <Route path="wishlist" element={<WishList />} />
          <Route path="info" element={<Account />} />
        </Route>
        <Route path="auth/" element={<RegisterLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
