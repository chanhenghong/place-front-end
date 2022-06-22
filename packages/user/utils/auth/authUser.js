import axios from "axios";

import jsCookie from "js-cookie";
import { setCookie } from "nookies";


export const registerUser = async (
  firstName, lastName, email, password,
  setError,
  setLoading,
  router
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/place/users`,
      { firstName,lastName, email, password, role: "user" }
    );
    router.push('/login')
  } catch (error) {
    console.log(error)
    setError("Error ....",process.env.NEXT_PUBLIC_API_URL)
  }
  setLoading(false);
};

export const loginUser = async (email, password, setError, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/place/auth/signin`,
      { email, password }
    );
    console.log(res)
    if (res.status != 200) return setError(res.data);
    // console.log(res.data?.data.roles[0])
    if (res.data?.data.role == "user") {
      console.log(res.data.data);
      setToken(res.data.data);
    } else {
      setError("You are admin");
    }
  } catch (error) {
    console.info(error);
    setError("Error Occured")
  }
  setLoading(false);
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.location.href = location;
    }
  }
};

const setToken = (token) => {
  if (token) {
    setCookie(null, "token_user", token);
    jsCookie.set("token_user", JSON.stringify(token));
  }
  if (typeof window !== "undefined") {
    // Client-side-only code
    window.location.href = "/homepage_after_login"; // after login navigation
  }
};

export const logoutUser = () => {
  jsCookie.remove("token_user");
  window.location.href = "/";
};
