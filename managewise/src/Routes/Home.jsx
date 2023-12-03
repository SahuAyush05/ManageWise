import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import "../App.css";
import Features from "../components/Features";
import NeedAnswer from "../components/NeedAnswer";
import Footer from "../components/Footer";
import JoinUs from "../components/JoinUs";
import Clients from "../components/Clients";
import Pricing from "../components/Pricing";
import Card5 from "../Cards/Card5";
const Home = () => {
  return (
    <div className="home">
      <div className="homein">
        <Navbar />
        <Welcome />
      </div>

      <Features />
      <NeedAnswer />
      <Pricing />
      <Clients />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
