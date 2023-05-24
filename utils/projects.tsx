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
    name: "Invasion RO",
    description:
      "A web3 blockchain-integrated play-to-earn Ragnarok game with governance and farming tokens that allows users to earn tokens in the game and exchange for other crypto tokens.",
    image: "/assets/ragnarok.png",
    github: "https://github.com/DevgenX/invasion-ro",
    link: "https://marketplace.invasionro.net/",
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
