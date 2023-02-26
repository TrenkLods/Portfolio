import { Intro, Profile, Information, Projects, Skill } from "@/components";
import Head from "next/head";
import { client } from "../lib/client";
import { Octokit } from "octokit";
const Home = ({ data, projects }) => {
  return (
    <>
      <div>
        <Intro />
        <Profile />
        <Information />

        <Skill data={data} />
        {/*projects?.map((project) => (
          <Projects key={project._id} project={project} />
        ))*/}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);

  const username = "trenklods";
  const token = process.env.NEXT_PUBLIC_GIT_TOKEN;

  const octokit = new Octokit({
    auth: token,
  });

  const staticData = await octokit.request(
    `https://api.github.com/user/repos?sort=created`,
    {
      username,
      token,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const data = staticData.data;

  return { props: { data, projects } };
};

export default Home;
