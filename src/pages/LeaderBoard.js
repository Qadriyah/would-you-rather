import React from "react";
import { useSelector } from "react-redux";

import ScoreCard from "../components/ScoreCard";

const LeaderBoard = () => {
  const users = useSelector((state) =>
    state.users && state.users.users
      ? Object.values(state.users.users)
          .map((user) => {
            user.totalQuestions = user.questions.length;
            user.totalAnswered = Object.keys(user.answers).length;
            return user;
          })
          .sort(
            (a, b) =>
              b.totalQuestions +
              b.totalAnswered -
              (a.totalQuestions + a.totalAnswered)
          )
      : []
  );

  return (
    <div className="main-content">
      {users.map((user) => (
        <ScoreCard user={user} />
      ))}
    </div>
  );
};

export default LeaderBoard;
