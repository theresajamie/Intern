import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const products = [
  { image: "/sunglasses.jpg", title: "Les Deux® Scott Sunglasses", category: "Sunglasses" },
  { image: "/jacket.jpg", title: "Nike® Sportswear Therma", category: "Hooded Jacket" },
  { image: "/cream.jpg", title: "SEEN® Curly Creme", category: "Skin and Hair" },
  { image: "/leggings.jpg", title: "Nike Universa Women's Mid-Rise", category: "Gym Leggings" },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
