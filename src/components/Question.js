import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Question = ({ question, author }) => {
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
            borderLeftWidth: "1px",
            borderLeft: "solid",
            borderLeftColor: "#f2f2f2",
          }}
        >
          <span className="small font-italic">
            {moment(question.timestamp).format("DD/MM/YYYY")}
          </span>
          <div className="lead" style={{ fontWeight: "600" }}>
            Would you rather...
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Link to={`/questions/${question.id}`}>
              <button className="btn btn-primary w-100">View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
