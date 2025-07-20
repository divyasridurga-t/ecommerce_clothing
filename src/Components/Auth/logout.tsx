'use client'

import { useRouter } from "next/navigation";

const Logout = () => {
  let route = useRouter();

  async function handleLogout() {
    try {
      let api = await fetch(`http://localhost:3000/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      let res = await api.json();
      if (res.success) {
        route.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <button
        onClick={handleLogout}
        className="ms-4 border p-2 border-white text-white rounded-md cursor-pointer text-md"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
