import React from "react";

const Poll = ({ question, author }) => {
  return (
    <div
      className="d-flex flex-column border mb-3"
      style={{ borderRadius: "10px" }}
    >
      <div
        className="p-3 lead"
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
            borderLeftWidth: "1px",
            borderLeft: "solid",
            borderLeftColor: "#f2f2f2",
          }}
        >
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
                />
                {question.optionOne.text}
              </span>
            </div>
            <div className="form-check">
              <span className="form-check-label">
                <input type="radio" class="form-check-input" name="optradio" />
                {question.optionTwo.text}
              </span>
            </div>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poll;
