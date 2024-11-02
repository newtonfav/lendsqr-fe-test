"use client";
import { useUser } from "@/src/app/context/user-context";
import {
  getGenderFromNumericValue,
  getMaritalStatus,
  getRelationshipFromNumericValue,
  getResidenceType,
} from "@/src/app/utils/functions/getUserFieldFromNumericValue";
import formatIncomeRange from "@/src/app/utils/helpers/formatIncomeRange";
import React from "react";

export default function Page() {
  const { profile, education, socials, guarantor, firstName } = useUser();
  const userGender = getGenderFromNumericValue(profile.gender);
  const guarantorRelationship = getRelationshipFromNumericValue(
    guarantor.relationship
  );
  const residenceType = getResidenceType(profile.residenceType);
  const maritalStatus = getMaritalStatus(profile.maritalStatus);

  const personalInfo = [
    {
      title: "full name",
      details: `${firstName} ${profile.lastName}`,
    },
    {
      title: "phone number",
      details: `${profile.phoneNumber}`,
    },
    {
      title: "email address",
      details: `${profile.email.toLowerCase()}`,
    },
    {
      title: "bvn",
      details: `${profile.bvn}`,
    },
    {
      title: "gender",
      details: `${userGender}`,
    },
    {
      title: "marital status",
      details: `${maritalStatus}`,
    },
    {
      title: "children",
      details: `${profile.children === "0" ? "None" : profile.children}`,
    },
    {
      title: "type of residence",
      details: `${residenceType}`,
    },
  ];

  const educationAndEmployment = [
    {
      title: "level of education",
      details: `${education.level}`,
    },
    {
      title: "employment status",
      details: `${education.employmentStatus}`,
    },
    {
      title: "sector of employment",
      details: `${education.sector}`,
    },
    {
      title: "duration of employment",
      details: `${education.duration}`,
    },
    {
      title: "office email",
      details: `${education.officeEmail.toLowerCase()}`,
    },
    {
      title: "monthly income",
      details: `${formatIncomeRange(education.monthlyIncome)}`,
    },
    {
      title: "loan repayment",
      details: `₦${education.loanRepayment.toLocaleString()}`,
    },
  ];

  const socialDetails = [
    {
      title: "twitter",
      details: `${socials.twitter}`,
    },
    {
      title: "facebook",
      details: `${socials.facebook}`,
    },
    {
      title: "instagram",
      details: `${socials.instagram}`,
    },
  ];

  const guarantorDetails = [
    {
      title: "full name",
      details: `${guarantor.firstName} ${guarantor.lastName}`,
    },
    {
      title: "phone number",
      details: `${guarantor.phoneNumber}`,
    },
    {
      title: "email address",
      details: `${guarantor.email.toLowerCase()}`,
    },
    {
      title: "relationship",
      details: `${guarantorRelationship}`,
    },
  ];

  return (
    <div className="userdetailspage">
      {/* personalInfo */}
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">
          Personal Information
        </div>

        <div className="details__container">
          {personalInfo.map(({ title, details }, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span>{details}</span>
            </div>
          ))}
        </div>
      </div>

      {/* education and employment */}
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">
          Education and Employment
        </div>

        <div className="details__container">
          {educationAndEmployment.map(({ title, details }, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span>{details}</span>
            </div>
          ))}
        </div>
      </div>

      {/* socials */}
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">Socials</div>

        <div className="details__container">
          {socialDetails.map(({ title, details }, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span>{details}</span>
            </div>
          ))}
        </div>
      </div>

      {/* gurantor */}
      <div className="userdetailspage__details">
        <div className="userdetailspage__details--header">Guarantor</div>

        <div className="details__container">
          {guarantorDetails.map(({ title, details }, index) => (
            <div className="details__info" key={index}>
              <h2>{title}</h2>
              <span>{details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
