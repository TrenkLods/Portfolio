import React from "react";
import Link from "next/link";
export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="left-content">
        <p className="maintext">Lets start acquaintance</p>

        <p className="resume">
          <Link href='/'>Resume Download</Link>
        </p>
      </div>
      <div className="right-content">
        <h1 className="boldtext">ABOUT ME BELOW</h1>
      </div>
    </div>
  );
};
export default Intro;
