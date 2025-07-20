"use client";

import { useState } from "react";

const InputBox = ({ type, id, setInput, input }: any) => {
  function handleInputChange(e: any) {
    setInput((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <label
        htmlFor={id}
        className="capitalize text-sm font-semibold mt-5 mb-1"
      >
        {id}
      </label>

      <input
        className="border h-[35px] text-sm rounded-sm w-full p-2"
        id={id}
        name={id}
        type={type}
        value={input[id]}
        placeholder={`Enter your ${id}`}
        onChange={handleInputChange}
      />
    </>
  );
};

export default InputBox;
