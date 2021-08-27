import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import Answer from "./Answer";
import { saveAnswer } from "../actions/question";

const Poll = ({ question, author, answered, user, questionId }) => {
  const voters = useSelector((state) =>
    state.users && state.users.users ? Object.keys(state.users.users).length : 0
  );
  const loading = useSelector((state) => state.questions.loading);
  const [answer, setAnswer] = React.useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    const selectedOption = event.target.value;
    setAnswer(selectedOption);
  };

  const onAnswer = () => {
    dispatch(
      saveAnswer({
        authedUser: user,
        qid: questionId,
        answer,
      })
    );
  };

  return (
    <div
      className="d-flex flex-column border mb-3"
      style={{ borderRadius: "10px" }}
    >
      <div
        className="p-3 lead rounded-top"
        style={{ backgroundColor: "#f2f2f2", fontWeight: "600" }}
      >
        {`${author.name} asks:`}
      </div>
      <div className="d-flex flex-row" style={{ alignItems: "center" }}>
        <div className="p-4">
          <img
            src={author.avatarURL}
            alt=""
            className="rounded-circle border"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
        <div
          className="p-3 flex-fill"
          style={{
            borderLeft: "solid 2px #f2f2f2",
          }}
        >
          {answered() ? (
            <>
              <Answer question={question} voters={voters} user={user} />
            </>
          ) : (
            <>
              <div className="lead" style={{ fontWeight: "600" }}>
                Would you rather...
              </div>
              <div className="mt-3">
                <div className="form-check">
                  <span className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                      value="optionOne"
                      onChange={(event) => onChange(event)}
                    />
                    {question.optionOne.text}
                  </span>
                </div>
                <div className="form-check">
                  <span className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                      value="optionTwo"
                      onChange={(event) => onChange(event)}
                    />
                    {question.optionTwo.text}
                  </span>
                </div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <button
                  className="btn btn-primary w-100"
                  disabled={loading}
                  onClick={onAnswer}
                >
                  {loading ? <div class="spinner-border"></div> : "Submit"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Poll.propTypes = {
  question: PropTypes.shape({
    optionOne: PropTypes.shape({ text: PropTypes.string.isRequired }),
    optionTwo: PropTypes.shape({ text: PropTypes.string.isRequired }),
  }),
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string,
  }),
  answered: PropTypes.func.isRequired,
};

export default Poll;
