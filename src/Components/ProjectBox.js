import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectName }) => {
  const desc = {
    StockPortfolio: "This website is a perfect example of a full stack application. It is a responsive website which I have made to understand the working of Typescript.",
    StockPortfolio: "https://github.com/Ayuuusshhhhhhhhh/stock-portfolio-website",

    ChatApp: "A website which allows a group of 5-10 people to log in and chat together. It was destined to be the minor project at my college. It was built using Javascript on the frontend and Socket.io on the backend, helping me to understand the basics and advanced concepts of Socket.io and server connections.",
    ChatAppGithub: "https://github.com/Ayuuusshhhhhhhhh/chat-app",

    EmailSubscription: "An email subscription system which was made using PHP. The idea to build this project was to test my newly learnt skills on PHP full stack and learn and work on APIs.",
    EmailSubscriptionGithub: "https://github.com/Ayuuusshhhhhhhhh/email-subscription-system",
  };

  return (
    <div className='projectBox'>
      <h3>{projectName}</h3>
      <p>{desc[projectName]}</p>
      <a href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
        <button className='projectbtn'><FaGithub /> Github</button>
      </a>
    </div>
  );
};

export default ProjectBox;
