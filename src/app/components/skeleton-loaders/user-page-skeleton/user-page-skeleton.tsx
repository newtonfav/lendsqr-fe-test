import React from "react";

const personalInfo = [
  "full name",
  "phone number",
  "email address",
  "bvn",
  "gender",
  "marital status",
  "children",
  "type of residence",
];

const educationAndEmployment = [
  "level of education",
  "employment status",
  "sector of employment",
  "duration of employment",
  "office email",
  "monthly income",
  "loan repayment",
];

export default function UserPageSkeleton() {
  return (
    <div className="userdetailspage">
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">
          Personal Information
        </div>

        <div className="details__container">
          {personalInfo.map((title, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span className="skeleton">details</span>
            </div>
          ))}
        </div>
      </div>

      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">
          Education and Employment
        </div>

        <div className="details__container">
          {educationAndEmployment.map((title, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span className="skeleton">details</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
