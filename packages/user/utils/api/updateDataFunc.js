import jsCookie from "js-cookie";
// import { customToast } from "./../../../components/atoms/toasts";
/**
 *
 * @param {*} url :string
 * @param {*} body :Object
 * @returns
 */
const updateDataFunc = async (url, body) => {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token || "{}");
      const res = await fetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.token,
        },
        body: JSON.stringify(body),
      });
      data = await res.json();
      window.location.reload();
      customToast(data.statusCode, data.message);
    }
  } catch (error) {
    console.error(error);
    // customToast(undefined, "Internal Server Error.");
  }
  return data;
};

export default updateDataFunc;
