import NavBar from "../components/NavBar";
import DestinationCards from "../components/DestinationCards";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import "./explore.css";
function Explore() {
  return (
    <>
      <NavBar />
      <div class="container">
        <img src="/images/Rectangle 11.png" alt="cover" className="cover"></img>
        <p className="ct1">Your next home...</p>
        <p className="ct2">|| वसुधैव कुटुम्बकम् ||</p>
      </div>
      <form>
        <img src="/images/search.svg" className="searchimg" alt="search"></img>
        <input
          name="searchtext"
          placeholder="    Where do you wanna go next?"
          className="searchtext"
        ></input>
        <img src="/images/Ellipse 4.png" alt="Profile" className="propic" />
      </form>
      <div className="tagselection">
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
        <Tags />
      </div>
      <div className="cards">
        <DestinationCards />
        <DestinationCards />
        <DestinationCards />
        <DestinationCards />
        <DestinationCards />
        <DestinationCards />
      </div>
      <Footer />
    </>
  );
}
export default Explore;
