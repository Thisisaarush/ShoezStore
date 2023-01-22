"use client";

import React, { FormEvent, useRef } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@utils/graphql";
import { useLoginStore } from "@zustand";
import { redirect } from "next/navigation";
import { Error, Loading } from "@components";

// next auth
import { useSession, signIn } from "next-auth/react";

const Register = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const { isUserLoggedIn, setUserLoggedIn, setUserName } = useLoginStore();

  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  // next auth session
  const { data: session } = useSession();

  // redirect
  if (data?.loginUser?.success) {
    setUserName(session?.user?.name || data?.registerUser?.name);
    setUserLoggedIn(true);
  }
  if (isUserLoggedIn) redirect("/");

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  // on submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginUser({
      variables: {
        user: {
          email: inputEmailRef?.current?.value,
          password: inputPasswordRef?.current?.value,
        },
      },
    });
  };

  return (
    <div className="m-auto flex min-h-screen max-w-5xl flex-col items-center gap-10">
      <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border py-8 px-6 sm:p-10">
        <span className="mb-10 text-xl font-semibold capitalize">
          Login to your Account
        </span>
        <p className="text-sm text-pink-600">{data?.loginUser?.message}</p>

        <form
          method="POST"
          className="flex flex-col items-center justify-center gap-10 py-8"
          onSubmit={(e) => handleSubmit(e)}
        >
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
            className="rounded-md bg-black px-6 py-2 capitalize text-white transition-all duration-300 ease-in-out hover:bg-gray-800 active:scale-90"
          >
            login
          </button>
        </form>
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-sm text-gray-400">Don't have an account</span>
          <Link href="/register" className="capitalize hover:text-gray-600">
            register
          </Link>
        </div>
      </div>

      {!session && (
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="text-sm text-gray-400">or</span>
          <span
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
            className="cursor-pointer rounded-md bg-blue-500 px-6 py-2 capitalize text-white hover:bg-blue-400"
          >
            continue with google
          </span>
        </div>
      )}
    </div>
  );
};

export default Register;
