const ProductDescription = ({setDescription}:any) => {
  return (
    <>
      <div className="mt-5">
        <div>
          <label
            className="capitalize text-sm font-semibold mb-1"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <textarea
          name="description"
          id="description"
          rows={5}
          className="border w-full rounded-md p-2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default ProductDescription;
