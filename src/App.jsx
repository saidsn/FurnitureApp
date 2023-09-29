import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/mainlayout/MainLayout";
import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Products from "./pages/products/ProductsPage";
import Collections from "./pages/collections/CollectionsPage";
import Contact from "./pages/contact/ContactPage";
import ShoppingCart from "./pages/shoppingcart/ShoppingCartPage";
import ProductDetail from "./pages/productdetail/ProductDetailPage";
import Account from "./pages/account/AccountPage";
import AccountLayout from "./components/layouts/accountlayout/AccountLayout";
import WishList from "./pages/wishlist/WishListPage";
import AuthLayout from "./components/layouts/authlayout/AuthLayout";
import Register from "./pages/auth/register/RegisterPage";
import Login from "./pages/auth/login/LoginPage";
import ForgotPassword from "./pages/auth/forgotpassword/ForgotPasswordPage";
import ResetPassword from "./pages/auth/resetpassword/ResetPasswordPage";
import VerificationPage from "./pages/auth/verification/VerificationPage";

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
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/productdetail/:id/:title" element={<ProductDetail />} />
        </Route>
        <Route path="/account" element={<AccountLayout />}>
          <Route path="wishlist" element={<WishList />} />
          <Route path="info" element={<Account />} />
        </Route>
        <Route path="auth/" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="verification" element={<VerificationPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
