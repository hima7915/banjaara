import React from "react";
import NavSignedIn from "../components/NavSignedIn";
import DestinationCards from "../components/DestinationCards";
import Footer from "../components/Footer";
import "./profile.css";
function Profile() {
  return (
    <>
      <NavSignedIn />
      <div class="container">
        <img src="/images/Rectangle 11.png" alt="cover" className="cover"></img>
        <p className="ct1">Your next home...</p>
        <p className="ct2">|| वसुधैव कुटुम्बकम् ||</p>
      </div>
      <img src="/images/Ellipse 4.png" className="propic1"></img>
      <div className="userinfo">
        <p className="username1">Poppins Peppy</p>
        <div className="smicons">
          <img src="\images\insta.png" className="socialmedia"></img>
          <img src="\images\fb.png" className="socialmedia"></img>
          <img src="\images\gmail.png" className="socialmedia"></img>
          <img src="\images\yt.png" className="socialmedia"></img>
          <img src="\images\twitter.png" className="socialmedia"></img>
        </div>
      </div>
      <p className="about">About Poppins Peppy</p>
      <p className="abouttext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="about">Recent Blogs</p>
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
export default Profile;
