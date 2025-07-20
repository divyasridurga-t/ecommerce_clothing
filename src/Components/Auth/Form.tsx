"use client";
import Link from "next/link";
import InputBox from "./commonInputbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Form = ({ type }: any) => {
  let router = useRouter();
  let [input, setInput]: any = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleClick() {
    let bodyObj = {
      name: input.name,
      email: input.email,
      password: input.password,
    };

    try {
      let api = await fetch(
        `http://localhost:3000/auth/${
          type == "register" ? "register" : "login"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(bodyObj),
        }
      );

      let res = await api.json();
      if (res.success == true) {
        toast.success(`Success !!`);
        //   redirect to backoffice page on successful registration
        router.push("/backoffice");
      } else {
        // set alert that register has failed
        toast.error(`${res?.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="rounded-xl shadow-xl w-1/3 p-6 text-gray-600 border-t border-t-gray-200">
      <h2 className="font-semibold text-2xl text-center">
        {`${
          type == "register" ? "Create your account" : "Log in to your account"
        }`}
      </h2>
      <div className="flex flex-col justify-center">
        {type == "register" && (
          <InputBox setInput={setInput} input={input} id={"name"} type="text" />
        )}
        <InputBox setInput={setInput} input={input} id={"email"} type="email" />
        <InputBox
          setInput={setInput}
          input={input}
          id={"password"}
          type="password"
        />
        <button
          onClick={handleClick}
          className="bg-gray-600 p-2 rounded-sm mt-4 text-sm text-white"
        >
          {` Sign ${type == "register" ? "up" : "in"}`}
        </button>
        <p className="text-sm mt-4 text-center">
          {type == "register" ? `already have an account ?` : `Don't have an account ?`}{" "}
          <Link
            className="text-black font-semibold"
            href={type == "register" ? "/login" : "/register"}
          >
            {` Sign ${type == "register" ? "in" : "up"}`}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Form;
