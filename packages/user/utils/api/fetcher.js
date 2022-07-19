import jsCookie from "js-cookie";

const fetcher = async (url) => {
  const token = jsCookie.get("token_user");
  let data = {};

  if (token) {
    const authorize = JSON.parse(token);
    console.log("Tokend",authorize)
    const res = await fetch(url, {
      headers: {
        "x-access-token": authorize.token,
      },
    });
    // console.log(res);
    data = await res.json();
  }
  return data;
};

export default fetcher;
