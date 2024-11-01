"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pablo from "@/src/public/pablo-avatar.png";
import Input from "../components/Input/Input";
import useInput from "../utils/hooks/useInput";
import isEmail from "../utils/functions/validateEmail";
import isPassword from "../utils/functions/validatePassword";
import Logo from "../components/Logo/Logo";

export default function Login() {
  const [email, setEmail, clearEmail] = useInput("");
  const [password, setPassword, clearPassword] = useInput("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail(String(email)) || !isPassword(String(password))) {
      if (!isEmail(String(email))) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 2000);
      }
      if (!isPassword(String(password))) {
        setPasswordError(true);
        setTimeout(() => {
          setPasswordError(false);
        }, 2000);
      }
      return;
    }
    router.push("/dashboard/users");
  };

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left--logo">
          <Logo />
        </div>

        <div className="login__left--avatar">
          <Image
            className="login__left--image"
            src={pablo}
            alt="left"
            width={700}
            priority
          />
        </div>
      </div>

      <div className="login__right">
        <div className="login__right--text">
          <h2 className="">Welcome!</h2>
          <p>Enter details to login</p>
        </div>

        <form onSubmit={handleSubmit} className="login__right--form">
          <Input
            renderError={true}
            placeholder="Email"
            value={String(email)}
            setValue={setEmail}
            errorMessage="Enter a valid email"
            clearValue={clearEmail}
            type="text"
            error={emailError}
          />
          <Input
            renderError={true}
            placeholder="Password"
            type="password"
            value={String(password)}
            setValue={setPassword}
            clearValue={clearPassword}
            error={passwordError}
            errorMessage="Password must be at least 8 characters!"
          />
          <span className="">Forgot Password?</span>
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}
