const DisplayProducts = () => {
  return (
    <div className="flex-1 ">
      <div>
        <div className="flex ">
          <div className="w-1/6">Title</div>
          <input type="text" className="border w-3/4 h-[35px] rounded-sm" />
        </div>
        <div className="flex">
          <div className="w-1/6">
            Description
          </div>
          <textarea className="border w-3/4 rounded-sm" name="" id=""></textarea>
        </div>
        <div className="flex">
          <div className="w-1/6">Price</div>
          <input type="text" className="border w-3/4 h-[35px] rounded-sm" />
        </div>
        <div className="flex">
          <div className="w-1/6">Category</div>
          <input type="text" className="border w-3/4 h-[35px] rounded-sm" />
        </div>
        <div className="flex">
          <div className="w-1/6">Color</div>
          <input type="text" className="border w-3/4 h-[35px] rounded-sm" />
        </div>
        <div className="flex">
          <div className="w-1/6">Image</div>
          <input type="text" className="border w-3/4 h-[35px] rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
