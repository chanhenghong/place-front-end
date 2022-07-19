import jsCookie from "js-cookie";
import { customToast } from "./../../../components/atoms/toasts";
async function deleteDataFunc(url) {
  const token = jsCookie.get("token_user");
  let data = {};
  try {
    if (token) {
      const authorize = JSON.parse(token);
      const res = await fetch(url, {
        method: "delete",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "x-access-token": authorize.token,
        },
      });
      data = await res.json();
      customToast(data.statusCode, data.message);
    }
  } catch (error) {
    console.error(error);
    customToast(undefined, "Internal Server Error.");
  }
  return data;
}
export default deleteDataFunc;
