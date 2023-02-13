import React from "react";

const Information = () => {
  return (
    <div className="Information-container">
      <div className="Information-profile">
        <h3>Profile</h3>
        <div className="profile-description">
        <p>
          Having received basic knowledge, he returned to self-study. I studied
          the relevant literature on Front-end development, and also watched
          various video conferences. I am an aspiring React front-end developer
          with extensive resources in MaterialUl, SCSS, Redux Toolkit, Next.js,
          and more. I have little experience in developing web applications
          using modern technologies that implement the use of APIs and the
          assembly of adaptive and responsive interfaces. My best qualities and
          skills include analytical thinking, the ability to freely solve
          problems and use tools and technologes.
        </p>
        </div>
        
      </div>
      <div className="education">
        <h3>Education</h3>
        <div className="education-description">
        
        <p className="bold">GRSU Yanka Kupala</p>
        <p className="bold">2016-2020</p>
          <p>Faculty: Faculty of Mathematics and Informatics</p>
          <p>Qualification: Information Security Specialist. Mathematician</p>
          <p>Specialization: Secure Information Systems </p>
          <p>Duration of study. full-time - 4 years</p>
        </div>
      </div>
    </div>
  );
};
export default Information;
