import Image from "next/image";
import React from "react";
import favicon from "../public/myphoto2.png";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <Image
          src={favicon}
          alt="Picture of the author"
          
          className='profile-myimage'
        />
      </div>
      <div className="info-container">
        <div className="name">
          <h2>Sherel</h2>
          <h2>Aleksey</h2>
        </div>
        <div className="contacts">
          <div className="phone">
            <h4>Phone</h4>
            <p>+375(29)328-99-73</p>
          </div>
          <div className="email">
            <h4>Email</h4>
            <p>Alekssherel@gmail.com</p>
          </div>
          <div className="location">
            <h4>My Location</h4>
            <p>Republic of Belarus</p>
            <p>The city of Grodno</p>
          </div>
          <div className="birth">
            <h4>Date of Birth</h4>
            <p>07.11.1998</p>
          </div>
          <div className="link">
            <h4>Helpful Links</h4>
            <p>Telegram</p>
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
