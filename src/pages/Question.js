import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Poll from "../components/Poll";

const Question = ({ match, user }) => {
  const { question_id } = match.params;
  const question = useSelector((state) =>
    state.questions && state.questions.questions
      ? state.questions.questions[question_id]
      : null
  );
  const author = useSelector((state) =>
    state.users && state.users.users ? state.users.users[question.author] : null
  );

  const answered = () =>
    [...question.optionOne.votes, ...question.optionTwo.votes].includes(user)
      ? true
      : false;

  return (
    <div className="main-content">
      <Poll
        question={question}
        author={author}
        answered={answered}
        user={user}
        questionId={question_id}
      />
    </div>
  );
};

Question.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ question_id: PropTypes.string }),
  }),
  user: PropTypes.string.isRequired,
};

export default Question;
