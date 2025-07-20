import { toast } from "react-toastify";

const ProductImage = ({setImageUrl}:any) => {
  async function handleImageUpload(e: any) {
    let data = e.target.files[0];
    try {
      let formData = new FormData();
      formData.append("image", data);
      let api = await fetch(`http://localhost:3000/products/upload/image`, {
        method: "POST",
        body: formData,
      });
      let res = await api.json();

      if (res.status) {
        toast.success("image uploaded successfully");
        setImageUrl(res.url);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mt-4">
        <div>
          <label
            className="capitalize text-sm font-semibold mb-1"
            htmlFor="image"
          >
            Image
          </label>
        </div>
        <input
          id="image"
          className="border h-[35px] text-sm rounded-sm w-full p-2"
          type="file"
          accept="image/"
          placeholder=""
          onChange={handleImageUpload}
        />
      </div>
    </>
  );
};

export default ProductImage;
