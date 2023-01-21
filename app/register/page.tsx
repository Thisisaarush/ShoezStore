"use client";

import { useMutation } from "@apollo/client";
import { Error, Loading } from "@components";
import { REGISTER_USER } from "@utils/graphql";
import Link from "next/link";
import React, { useRef } from "react";

const Register = () => {
  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
  const inputNameRef = useRef<any>(null);
  const inputEmailRef = useRef<any>(null);
  const inputPasswordRef = useRef<any>(null);

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="m-auto mt-10 flex w-fit max-w-5xl flex-col items-center justify-center rounded-2xl border py-8 px-6 sm:p-10">
        <span className="mb-10 text-xl font-semibold capitalize">
          Create New Account
        </span>
        <form
          method="POST"
          action=""
          className="flex flex-col items-center justify-center gap-10 py-8"
          onSubmit={async (e) => {
            e.preventDefault();
            await registerUser({
              variables: {
                user: {
                  name: inputNameRef?.current?.value,
                  email: inputEmailRef?.current?.value,
                  password: inputPasswordRef?.current?.value,
                },
              },
            });
            console.log(data);
          }}
        >
          <span className="relative">
            <input
              type="text"
              id="name"
              name="fullname"
              placeholder="Name"
              ref={inputNameRef}
              className="peer w-80 rounded-md bg-slate-50 px-4 py-2 placeholder-transparent focus:border-b-2 focus:border-b-gray-500 focus:outline-none"
              required
            />
            <label
              htmlFor="name"
              className="absolute -top-4 left-0 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-4 peer-focus:left-0"
            >
              Full Name
            </label>
          </span>

          <span className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              ref={inputEmailRef}
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
              ref={inputPasswordRef}
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
            className=" rounded-md bg-black px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-gray-800 active:scale-90"
          >
            Register
          </button>
        </form>
        <div className="justify-cente flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Already have an account</span>
          <Link href="/login" className="capitalize hover:text-gray-600">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
