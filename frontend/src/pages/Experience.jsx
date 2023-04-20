import React from "react";
import "./experience.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
function Experience() {
  return (
    <>
      <NavBar />
      <form>
        <div className="exp">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="title inptxt"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="inptxt"
          />
          <input
            type="number"
            name="days"
            placeholder="Days"
            className="inptxt"
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="inptxt"
          />
          <textarea
            id="exp"
            name="experience"
            placeholder="Share your experience here..."
            rows={13}
            className="exptxt"
          ></textarea>
        </div>
        <div className="tagselection">
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
          <Tags />
        </div>
        <button type="submit" className="submitb">
          <p className="submit">Submit!</p>
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Experience;
