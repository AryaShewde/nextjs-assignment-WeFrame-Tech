import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntrestSection from "./components/IntrestSection";
import Main from "./components/Main";
import ProductSlider from "./components/ProductSlider";


export default function Home() {
  return (
    <div>
      <Main/>
      <ProductSlider/>
      <IntrestSection/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>
  );
}
