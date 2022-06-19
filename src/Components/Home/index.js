import React from "react";
import Featured from "./featured";
import MatchesHome from "./matches";
import MeetPlayers from "./meetPlayers";
import Promotions from "./promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
      <MeetPlayers />
      <Promotions />
    </div>
  );
};

export default Home;
