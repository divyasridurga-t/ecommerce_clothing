"use client";
import { useState } from "react";
import InputCommonComponent from "./inputCommonComp";
import InputArrayForm from "./inputArrayform";
import { toast } from "react-toastify";
import ProductImage from "./productImage";
import ProductDescription from "./productDescription";
import { title } from "process";
import { useUserdata } from "@/app/hooks/useUserData";

const PostProducts = () => {
  let [inputValue, setInputValue] = useState({
    title: "",
    price: "",
    category: "",
    color: "",
  });
  let [description, setDescription] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [inputSize, setInputSizes]: any = useState("");
  let [sizeData, setSizeData]: any = useState([]);

  let userData = useUserdata(); // to get the userdetails

  async function postProductdata() {
    try {
      let api = await fetch(`http://localhost:3000/products`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userData?.userId,
          title: inputValue.title,
          description: description,
          price: inputValue.price,
          category: inputValue.category,
          color: inputValue.color,
          image: imageUrl,
          sizes: sizeData,
        }),
      });

      let res = await api.json();
      if (res.status) {
        toast.success("product added successfully");
      }
    } catch (error: any) {
      toast.error(error);
      console.log(error);
    }
  }

  function handleDeleteSize(data: any) {
    let filteredData = sizeData.filter((item: any) => {
      return item != data;
    });

    setSizeData(filteredData);
  }

  console.log(sizeData, "&&&&");

  return (
    <div className="flex-1 border border-gray-200 shadow-lg mt-7 p-5 rounded-lg m-2 text-gray-600">
      <InputCommonComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        id="title"
      />

      {/* description */}
      <ProductDescription setDescription={setDescription} />

      {/* price, category */}
      <div className="flex gap-2">
        <div className="flex-1">
          <InputCommonComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            id="price"
          />
        </div>
        <div className="flex-1">
          <InputCommonComponent
            inputValue={inputValue}
            setInputValue={setInputValue}
            id="category"
          />
        </div>
      </div>

      {/* image input */}
      <ProductImage setImageUrl={setImageUrl} />

      {/* sizes */}
      <InputArrayForm
        id="sizes"
        inputSize={inputSize}
        setInputSizes={setInputSizes}
        setSizeData={setSizeData}
      />
      <div className="flex gap-2 flex-wrap">
        {sizeData?.length
          ? sizeData?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="bg-gray-200 p-1.5 rounded-md mt-2 mb-2 w-fit uppercase text-xs"
                >
                  {item || ""}
                  <button
                    onClick={() => handleDeleteSize(item)}
                    className="ms-2 text-black"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          : ""}
      </div>
      {/* todo - display the sizes as buttons */}

      {/* color */}
      <InputCommonComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        id="color"
      />

      <div className="flex justify-center">
        <button
          onClick={postProductdata}
          className="bg-gray-600 w-1/4 p-2 text-center mt-3 rounded-md text-white"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default PostProducts;
