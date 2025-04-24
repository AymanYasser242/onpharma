import "./i18n";
import "./styles/App.css";
import { useTranslation } from "./hooks/useTranslation";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useHref,
} from "react-router";
import Explore from "./components/Explore/Explore";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Vision from "./components/Vision/Vision";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProductView from "./components/Products/ProductView";
import Home from "./pages/Home";
import RootLayout from "./components/layout/RootLayout";
import { HeroUIProvider } from "@heroui/react";
import About from "./components/About/About";

function App() {
  const { isRTL } = useTranslation();
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <div className="App" dir={isRTL ? "rtl" : "ltr"}>
        <Header />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/view/:id" element={<ProductView />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </HeroUIProvider>
  );
}

export default App;
