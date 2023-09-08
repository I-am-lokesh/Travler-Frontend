import NavBar from "../components/Home/NavBar";
import OrangeBlock from "../components/Home/OrangeBlock";
import Topdiv from "../components/Home/Topdiv";
import SearchBar from "../components/Home/SearchBar";
import MidDiv from "../components/Home/MidDiv";
import BottomDiv from "../components/Home/BottomDiv";
// import BottomBlock from '../components/Home/BottomBlock'
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <>
      <OrangeBlock />
      <NavBar />
      <Topdiv />
      <br />
      <SearchBar />
      <br />
      <br />
      <MidDiv />
      <br />
      <BottomDiv />
      <Footer />
    </>
  );
}

export default Home;
