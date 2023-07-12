import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.css";
import Footer from "../components/Footer";
// import ImageSlider from "../components/ImageSlider";
import ImageCarousel from "../components/ImageCarousel";
function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="container w-100 p-0">
          <img
            src="/images/Component 6.png"
            alt="cover"
            className="w-100"
          ></img>
        </div>
        <div className="row justify-content-between m-2">
          <div className="col-md-8 col-12">
            <div className="homeheadings">
              Explore next temporary home for yourself!
              <Link to="/pages/Explore">
                <img
                  src="./images/arrow-right.png"
                  className="arrow"
                  alt="explore"
                ></img>
              </Link>
            </div>
            <p className="headtext">
              See travel logs from people around the around the world and see
              what sounds like you. Choose from the best places to go there,
              best sights, delightful delicacies and wonderful adventures.
            </p>
          </div>
          <div className="col-md-3 col-12">
            <ImageCarousel />
          </div>
        </div>
        <div className="row justify-content-between m-2">
          <div className=" col-md-8 col-12">
            <div className="homeheadings">
              Share your Experience!
              <Link to="/pages/Experience">
                <img
                  src="./images/arrow-right.png"
                  className="arrow"
                  alt="experience"
                ></img>
              </Link>
            </div>
            <p className="headtext">
              Write a blog to tell people about what you loved in your recent
              trip, share your experience with travel geeks like you. If you are
              as lazy as we are, but still want to help drop comments about
              places secret to to a general tourist. And if you do not wish to
              share your experience but document it, keep your blog private!
            </p>
          </div>
          {/* <ImageSlider images={images} /> */}
          <div className="col-md-3 col-12">
            <ImageCarousel />
          </div>
        </div>
        <div className="row m-2">
          <p className="homeheadings">Help us improve...</p>
          <form>
            <p className="headtext">Feel free to provide a feedback!</p>
            <input
              name="name"
              placeholder="Your suggestions here please...."
              className="textbox px-3"
            />
            <button type="submit col-md-12" className="sendb">
              <p className="sendt">Send!</p>
            </button>
          </form>
        </div>
      </div>
      <Link to="/pages/Profile">
        <h1>profile</h1>
      </Link>
      <Link to="/pages/Blogs">
        <h1>Blogs</h1>
      </Link>
      {/* <Template /> */}
      <Footer />
    </>
  );
}
export default HomePage;
