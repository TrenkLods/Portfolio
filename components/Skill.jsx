import React from "react";

const Skill = ({ data }) => {
  return (
    <>
    <h1 className="git_container">GitHub projects</h1>
      
      <div className="skills-container">
        {
          /**/ data.map((data) => (
            <div className="skills-templatest" key={data.url}>
              <h2>{data.name}</h2>
              <a href="data.git_url"> Link to github</a>
              <h6>Visibility : {data.visibility}</h6>
              <h6>watchers:{data.watchers}</h6>
              <h6>Time create app : {data.created_at}</h6>
            </div>
          ))
        }
      </div>
    </>
  );
};
export default Skill;
