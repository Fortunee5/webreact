import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/5img.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Joshua Generation"
        text="A man sent by God"
        buttonText="Sermons"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
