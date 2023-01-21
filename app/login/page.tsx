"use client";

import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="m-auto mt-10 flex w-fit max-w-5xl flex-col items-center justify-center rounded-2xl border py-8 px-6 sm:p-10">
        <span className="mb-10 text-xl font-semibold capitalize">
          Login to your Account
        </span>
        <form
          method="POST"
          className="flex flex-col items-center justify-center gap-10 py-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="peer w-80 rounded-md bg-slate-50 px-4 py-2 placeholder-transparent focus:border-b-2 focus:border-b-gray-500 focus:outline-none"
              required
            />
            <label
              htmlFor="email"
              className="absolute -top-4 left-0 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-4 peer-focus:left-0"
            >
              Email
            </label>
          </span>

          <span className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="peer w-80 rounded-md bg-slate-50 px-4 py-2 placeholder-transparent focus:border-b-2 focus:border-b-gray-500 focus:outline-none"
              required
            />
            <label
              htmlFor="password"
              className="absolute -top-4 left-0 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-4 peer-focus:left-0"
            >
              Password
            </label>
          </span>

          <button
            type="submit"
            className="rounded-md bg-black px-6 py-2 capitalize text-white transition-all duration-300 ease-in-out hover:bg-gray-800 active:scale-90"
          >
            login
          </button>
        </form>
        <div className="justify-cente flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Don't have an account</span>
          <Link href="/register" className="capitalize hover:text-gray-600">
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
