import { useEffect, useState } from "react";

export const useUserdata = () => {
  let [userDetails, setUserDetails]: any = useState(null);
  async function getUserDetails() {
    try {
      let api = await fetch("http://localhost:3000/user/data", {
        method: "GET",
        credentials: "include",
      });
      let res = await api.json();
      if (res.success) {
        setUserDetails(res.userInfo);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return userDetails
};


