import React from "react";

const personalInfo = [
  {
    title: "full name",
  },
  {
    title: "phone number",
  },
  {
    title: "email address",
  },
  {
    title: "bvn",
  },
  {
    title: "gender",
  },
  {
    title: "marital status",
  },
  {
    title: "children",
  },
  {
    title: "type of residence",
  },
];

const educationAndEmployment = [
  {
    title: "level of education",
  },
  {
    title: "employment status",
  },
  {
    title: "sector of employment",
  },
  {
    title: "duration of employment",
  },
  {
    title: "office email",
  },
  {
    title: "monthly income",
  },
  {
    title: "loan repayment",
  },
];

export default function UserPageSkeleton() {
  return (
    <div className="userdetailspage">
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">
          Personal Information
        </div>

        <div className="details__container">
          {personalInfo.map(({ title }, index) => (
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
          {educationAndEmployment.map(({ title }, index) => (
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
