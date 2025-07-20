const InputCommonComponent = ({ id, inputValue, setInputValue }: any) => {
  function handleInputChange(e: any) {
    setInputValue((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <div>
        <label
          className="capitalize text-sm font-semibold mt-5 mb-1"
          htmlFor={id}
        >
          {id}
        </label>
      </div>
      <input
        required={true}
        id={id}
        name={id}
        value={inputValue[id]}
        type="text"
        className="border h-[35px] text-sm rounded-sm w-full p-2"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputCommonComponent;
