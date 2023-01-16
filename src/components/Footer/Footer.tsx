import React from "react";

export const Footer = () => {
  return (
    <div className="m-auto mt-32 flex h-72 w-screen max-w-5xl flex-col items-center justify-around bg-black p-8 capitalize text-white">
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl">don't miss something</span>
        <span className="font-orbitron text-3xl font-semibold">cool</span>
      </div>

      <div className="flex gap-8 justify-center items-center">
        <span className="hidden cursor-pointer sm:block">github &#8689;</span>
        <span className="hidden cursor-pointer sm:block">linkedin &#8689;</span>
        <span className="font-orbitron text-lg font-semibold uppercase md:text-xl">
          shoez store
        </span>
        <span className="hidden cursor-pointer sm:block">twitter &#8689;</span>
        <span className="hidden cursor-pointer sm:block">
          instagram &#8689;
        </span>
      </div>
    </div>
  );
};
