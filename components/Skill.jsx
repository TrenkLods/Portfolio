import React from "react";
import Link from "next/link";
const Skill = ({ data }) => {
  return (
    <>
      <h1 className="git_container">GitHub projects</h1>

      <div className="skills-container">
        {
          /**/ data.map((data) => (
            <div className="skills-templatest" key={data.url}>
              <h2>{data.name}</h2>
              <Link href="data.git_url">
                <h2> Link to github</h2>
              </Link>
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
