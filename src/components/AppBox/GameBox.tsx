import React from "react";
import CookieClicker from "./CookieClicker";
import UserStatsBox from "./UserStatsBox/UserStatsBox";

function GameBox() {
  return (
    <div>
      <CookieClicker /> <UserStatsBox />
    </div>
  );
}

export default GameBox;
