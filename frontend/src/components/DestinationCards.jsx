import React from "react";
import Tags from "./Tags";
import "./destinationcards.css";
export default function DestinationCards() {
  return (
    <>
      <div className="card">
        <img
          src="\images\download (3).jpg"
          className="cardsimg"
          alt="cards"
        ></img>
        <p className="blogtitle">Blog Title</p>
        <p className="username">By Author's Name</p>
        <div className="tagsondestcards">
          <Tags />
        </div>
      </div>
    </>
  );
}
