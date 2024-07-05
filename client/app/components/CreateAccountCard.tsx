"use client";

import { useAppDispatch } from "@/store";
import { login } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface CreateResponse {
  token: string;
  id: string;
  username: string;
  name: string;
  valid: boolean;
}

const CreateAccountCard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState({ email: "", password: "", access_code: "" });

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const access_code = formData.get("access_code");
    let hasError = false;
    setError({ email: "", password: "", access_code: "" });

    if (!email) {
      setError((prev) => ({ ...prev, email: "*You must include an email" }));
      hasError = true;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: "*You must include a password" }));
      hasError = true;
    }
    if (!access_code) {
      setError((prev) => ({ ...prev, access_code: "*You must include an access code" }));
      hasError = true;
    }

    if (!hasError && email) {
      const response = await fetch("/api/auth/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, access_code }),
      });

      if (response.ok) {
        dispatch(login(email.toString()));
        router.push("/dashboard");
      } else {
        const body = await response.json();
        alert(body.message);
      }
    }
  }

  const theme = 'dark'
  return (
    <div className="w-full flex flex-col gap-8 p-8 rounded-md bb-white">
      <div className="w-full mb-8 flex flex-col gap-2 items-center justify-center">
        {/* logo */}
        <div className="w-32 h-16 flex flex-row justify-center items-center gap-4">
          {theme == "dark" && (
            <img src="/press-kit/bb_logo_text_white.svg" className="w-32 h-16" />
          )}
          {theme == "light" && (
            <img src="/press-kit/bb_logo_text_black.svg" className="w-32 h-16" />
          )}
        </div>
        <span className="text-3xl font-bold text-center text-black dark:text-white font-nmbold">
          Create Account
        </span>
      </div>

      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex flex-col gap-1">
          <label className="text-sm text-bbgray-500 dark:text-bbgray-400">Email</label>
          <input
            name="email"
            type="email"
            placeholder="matt@usebrainbase.xyz"
            className="w-full p-2.5 rounded bb-50 text-bbgray-500 dark:text-bbgray-400"
          />
          {error.email && (
            <p className="text-sm -mt-5 text-red-500 mb-2">{error.email}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-sm text-bbgray-500 dark:text-bbgray-400">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter a password"
            className="w-full p-2.5 rounded bb-50 text-bbgray-500 dark:text-bbgray-400"
          />
          {error.password && (
            <p className="text-sm -mt-2 text-red-500 mb-">{error.password}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-sm text-bbgray-500 dark:text-bbgray-400">Access Code</label>
          <input
            name="access_code"
            type="text"
            placeholder="Enter an access code"
            className="w-full p-2.5 rounded bb-50 text-bbgray-500 dark:text-bbgray-400"
          />
          {error.access_code && (
            <p className="text-sm -mt-2 text-red-500 mb-">{error.access_code}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full px-6 py-5 mb-5 text-md font-bold leading-none text-white transition duration-300 md:w-96 rounded-md border border-gray-200 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100"
      >
        Create Account
      </button>
      <p className="text-sm mb-10 leading-relaxed text-bbgray-500 dark:text-bbgray-400">
        Already have an account?
        <a href="/" className="font-bold ml-2 text-blue-400">
          Log In
        </a>
      </p>
    </div>
  );
};

export default CreateAccountCard;