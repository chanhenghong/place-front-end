import jsCookie from "js-cookie";
//import { customToast } from "./../../../components/atoms/toasts";

/**
 *
 * @param {*} url : String
 * @param {*} body : Object
 * @returns
 */
const postData= async (url, body) => {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      console.log("Authorize",authorize)
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.token,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
      console.log(data);
      //customToast(data.statusCode, data.message);
    }
  } catch (error) {
    console.error(error);
    //customToast(undefined, "Internal Server Error.");
  }
  return data;
};

export default postData;
