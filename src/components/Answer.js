import React from "react";

const Answer = ({ question, voters, user }) => {
  const { optionOne, optionTwo } = question;
  const myAnswer =
    optionOne.votes && optionOne.votes.includes(user)
      ? "optionOne"
      : optionTwo.votes && optionTwo.votes.includes(user)
      ? "optionTwo"
      : null;

  const percentageVoters = (option) =>
    voters > 0 ? Math.floor((option.votes.length / voters) * 100) : 0;

  return (
    <div>
      <div
        className="border p-3 mb-3"
        style={{
          borderRadius: "8px",
          backgroundColor: `${myAnswer === "optionOne" ? "#a4cffc" : "#fff"}`,
        }}
      >
        <div className="bold">{`Would you rather ${optionOne.text}?`}</div>
        <div className="progress mt-2 mb-2">
          <div
            className="progress-bar"
            style={{
              width: `${percentageVoters(optionOne)}%`,
            }}
          >
            {`${percentageVoters(optionOne)}%`}
          </div>
        </div>
        <div className="text-center small bold">
          {`${optionOne.votes.length} out of ${voters} votes`}
        </div>
      </div>
      <div
        className="border p-3"
        style={{
          borderRadius: "10px",
          backgroundColor: `${myAnswer === "optionTwo" ? "#a4cffc" : "#fff"}`,
        }}
      >
        <div className="bold">Would you rather be a back-end developer?</div>
        <div className="progress mt-2 mb-2">
          <div
            className="progress-bar"
            style={{ width: `${percentageVoters(optionTwo)}%` }}
          >
            {`${percentageVoters(optionTwo)}%`}
          </div>
        </div>
        <div className="text-center small bold">
          {`${optionTwo.votes.length} out of ${voters} votes`}
        </div>
      </div>
    </div>
  );
};

export default Answer;
