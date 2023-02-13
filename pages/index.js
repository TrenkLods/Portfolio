import { Intro, Profile, Information, Projects,Skill } from "@/components";
import Head from "next/head";
import Image from "next/image";
import { client } from "../lib/client";
const Home = ({ projects, bannerData }) => {
  return (
    <>
      <div>
        <Intro />
        <Profile />
        <Information />
        <Skill/>
        {
          projects?.map((project) => (
          <Projects key={project._id} project={project} />
        ))
       }
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type == "project"]`;
  const projects = await client.fetch(query);



  return { props: { projects} };
};
export default Home;
