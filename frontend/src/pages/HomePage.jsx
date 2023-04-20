import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./homepage.css";
import Footer from "../components/Footer";
import images from "../components/CarouselPics";
import ImageSlider from "../components/ImageSlider";
function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homepage">
        <div class="container">
          <img
            src="/images/Rectangle 11.png"
            alt="cover"
            className="cover"
          ></img>
          <p className="ct1">Where the World becomes your home</p>
          <p className="ct2">|| वसुधैव कुटुम्बकम् ||</p>
        </div>
        <div>
          <p className="homeheadings">
            Explore next temporary home for yourself!
            <Link to="/pages/Explore">
              <img
                src="./images/arrow-right.png"
                className="arrow"
                alt="explore"
              ></img>
            </Link>
          </p>
          <p className="headtext">
            See travel logs from people around the around the world and see what
            sounds like you. Choose from the best places to go there, best
            sights, delightful delicacies and wonderful adventures.
          </p>
          <ImageSlider images={images} />
        </div>
        <div>
          <p className="homeheadings">
            Share your Experience!
            <Link to="/pages/Experience">
              <img
                src="./images/arrow-right.png"
                className="arrow"
                alt="experience"
              ></img>
            </Link>
          </p>
          <p className="headtext">
            Write a blog to tell people about what you loved in your recent
            trip, share your experience with travel geeks like you. If you are
            as lazy as we are, but still want to help drop comments about places
            secret to to a general tourist. And if you do not wish to share your
            experience but document it, keep your blog private!
          </p>
          <ImageSlider images={images} />
        </div>
        <div>
          <p className="homeheadings">Help us improve...</p>
          <form>
            <p className="headtext">Feel free to provide a feedback!</p>
            <input
              name="name"
              placeholder="Type Something...."
              className="textbox"
            />
            <button type="submit" className="sendb">
              <p className="sendt">Send!</p>
            </button>
          </form>
        </div>
      </div>
      <Link to="/pages/Profile">
        <h1>profile</h1>
      </Link>
      <Link to="/pages/SignUp">
        <h1>profile</h1>
      </Link>
      <Footer />
    </>
  );
}
export default HomePage;
