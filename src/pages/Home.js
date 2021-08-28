import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Question from "../components/Question";

const Home = ({ user }) => {
  const { users } = useSelector((state) => state.users);
  const questions = useSelector((state) =>
    state.questions && state.questions.questions
      ? Object.values(state.questions.questions).sort(
          (a, b) => b.timestamp - a.timestamp
        )
      : []
  );
  const { loading } = useSelector((state) => state.questions);

  return (
    <div className="main-content">
      {loading ? (
        <div className="spinner-border" />
      ) : (
        <Tabs
          defaultActiveKey="unanswered"
          id="uncontrolled-tab"
          className="mb-3"
        >
          <Tab eventKey="unanswered" title="Unanswered Questions">
            {questions
              .map((question) => {
                const votes = [
                  ...question.optionOne.votes,
                  ...question.optionTwo.votes,
                ];
                if (!votes.includes(user)) {
                  return (
                    <Question
                      key={question.id}
                      question={question}
                      author={users[question.author]}
                    />
                  );
                }
                return null;
              })
              .filter((item) => item !== null)}
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            {questions
              .map((question) => {
                const votes = [
                  ...question.optionOne.votes,
                  ...question.optionTwo.votes,
                ];
                if (votes.includes(user)) {
                  return (
                    <Question
                      key={question.id}
                      question={question}
                      author={users[question.author]}
                    />
                  );
                }
                return null;
              })
              .filter((item) => item !== null)}
          </Tab>
        </Tabs>
      )}
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.string,
};

export default Home;
