import NavBar from "../components/NavBar";
import DestinationCards from "../components/DestinationCards";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import "./explore.css";
function Explore() {
  return (
    <>
      <NavBar />
      <div className="container w-100 p-0">
        <img
          src="/images/Component 7.png"
          alt="cover"
          className="w-100 p-0"
        ></img>
      </div>
      <form>
        {/* <img src="/images/search.svg" className="searchimg" alt="search"></img> */}
        <div className="row d-flex flex-row align-items-center m-4 p-0">
          <div className="col-sm-10 col-8">
            <input
              name="searchtext"
              placeholder="Where do you wanna go next?"
              className="searchtext w-100 p-2"
            ></input>
          </div>
          <div className="col-sm-2 col-4 text-center">
            <img
              src="/images/Ellipse 4.png"
              alt="Profile"
              className="propic"
            />
          </div>
        </div>
      </form>
      <div className="tagselection p-2">
        <Tags />
      </div>
      <div className="cards p-2">
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
