import NavSignedIn from "../components/NavSignedIn";
import DestinationCards from "../components/DestinationCards";
import Footer from "../components/Footer";
import "./profile.css";
function Profile() {
  return (
    <>
      <NavSignedIn />
      <div className="cover">
        <img src="/images/Rectangle 11.png" alt="cover" className="cover-image" />
        <div className="profile-info">
          <img src="/images/Ellipse 4.png" alt="profile" className="profile-pic" />
        </div>
      </div>
      <div className="username1">Poppins Peppy</div>
      <div className="about px-4 py-2">About Poppins Peppy</div>
      <p className="abouttext px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="about px-4">Recent Blogs</p>
      <div className="cards">
        <DestinationCards />
      </div>
      <Footer />
    </>
  );
}
export default Profile;
