import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="m-auto mt-32 flex h-72 w-screen max-w-5xl flex-col items-center justify-around bg-black p-8 capitalize text-white">
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl">don't miss something</span>
        <span className="font-orbitron text-3xl font-semibold">cool</span>
      </div>

      <div className="flex items-center justify-center gap-8 transition-transform duration-300 ease-in-out">
        <Link
          href="https://github.com/Thisisaarush"
          target="_blank"
          className="hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 sm:block"
        >
          github &#8689;
        </Link>
        <Link
          href="https://www.linkedin.com/in/thisisaarush/"
          target="_blank"
          className="hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 sm:block"
        >
          linkedin &#8689;
        </Link>
        <span className="font-orbitron text-lg font-semibold uppercase md:text-xl">
          shoez store
        </span>
        <Link
          href="https://twitter.com/Thisisaarush"
          target="_blank"
          className="hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 sm:block"
        >
          twitter &#8689;
        </Link>
        <Link
          href="https://www.instagram.com/thisisaarush/"
          target="_blank"
          className="hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 sm:block"
        >
          instagram &#8689;
        </Link>
      </div>
    </div>
  );
};
