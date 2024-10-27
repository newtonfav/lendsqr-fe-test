"use client";

// import React, { useState } from "react";
import Logo from "../components/icons/logo";
import LogoText from "../components/icons/logo-text";
import Image from "next/image";
import pablo from "@/src/public/pablo-avatar.png";
import Input from "../components/Input";
import useInput from "../utils/hooks/useInput";

export default function Login() {
  const [email, setEmail, clearEmail] = useInput("");
  // const [password, setPassword, clearPassword] = useInput("");
  // const [emailError, setEmailError] = useState(false);
  // const [passWordError, setPassWordError] = useState(false);

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left--logo">
          <Logo />
          <LogoText />
        </div>

        <div className="login__left--avatar">
          <Image src={pablo} alt="left" width={700} />
        </div>
      </div>

      <div className="login__right">
        <div className="login__right--text">
          <h2 className="">Welcome!</h2>
          <p>Enter details to login</p>
        </div>
        <form className="login__right--form">
          <Input
            placeholder="Email"
            value={String(email)}
            setValue={setEmail}
            errorMessage="Please enter a valid email"
            clearValue={clearEmail}
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
