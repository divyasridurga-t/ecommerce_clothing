import { useState } from "react";

const InputArrayForm = ({ id, setSizeData, setInputSizes, inputSize }: any) => {
  function handleInputChange(e: any) {
    setInputSizes(e.target.value);
  }

  function handleAddClick() {
    setSizeData((prev: any) => [...prev, inputSize]);
  }

  return (
    <>
      <div className="mt-4">
        <label
          className="capitalize text-sm font-semibold mt-5 mb-1"
          htmlFor={id}
        >
          {id}
        </label>
      </div>
      <input
        id={id}
        name={id}
        type="text"
        value={inputSize}
        className="border h-[35px] text-sm rounded-sm w-[90%] p-2"
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddClick}
        className="cursor-pointer border h-[35px] text-sm rounded-sm p-2 ms-2"
      >
        Add
      </button>
    </>
  );
};

export default InputArrayForm;
