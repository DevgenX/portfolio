import React from "react";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
}

export const Projects: ProjectProps[] = [
  {
    name: "TradingLeague",
    description:
      "TradingLeague is a cryptocurrency trading game with 3 game modes (Normal, PvP and Ranked). The game lets you practice daytrading the most enjoyable and most interactive way.",
    image: "/assets/tradingleague.png",
    github: "https://github.com/DevgenX/TradingLeague",
    link: "https://tradingleague.onrender.com/",
  },
  {
    name: "DappChat",
    description:
      "A multi-chain and fully on-chain decentralized messaging application that allows users to add, message, block and unblock users all in the blockchain.",
    image: "/assets/dappchat.png",
    github: "https://github.com/DevgenX/dappchat",
    link: "https://www.dappchat.io/",
  },
  {
    name: "Jobby",
    description:
      "Jobby is a job-hunting management tool that allows users to Add, Modify and visualize their job application through charts summarizing their monthly job application statistics.",
    image: "/assets/jobby.png",
    github: "https://github.com/DevgenX/Jobby",
    link: "https://jobby-vwkk.onrender.com/",
  },
];
