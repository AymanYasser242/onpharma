import "./i18n";
import { useTranslation } from "./hooks/useTranslation";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Explore from "./components/Explore/Explore";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Vision from "./components/Vision/Vision";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProductView from "./pages/ProductView";
import Home from "./pages/Home";
import RootLayout from "./components/layout/RootLayout";

function App() {
  const { isRTL } = useTranslation();

  return (
    <Router>
      <div className="App" dir={isRTL ? "rtl" : "ltr"}>
        <Header />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/view/:id" element={<ProductView />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
