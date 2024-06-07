import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Bio : {data.bio}
      <h1> Repo {data.public_repos}</h1>
      {/* <img src={data.avatar_url} alt="Git picture" width={300} /> */}
    </div>
  );
}

export default Github;

export const loadGithub = async () => {
  const response = await fetch("https://api.github.com/users/MohdWaseem789");
  return response.json();
};
