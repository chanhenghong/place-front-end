import jsCookie from "js-cookie";
import { setCookie } from "nookies";
export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.location.href = location; // router.push("/")
    }
  }
};
const setToken = (token) => {
  setCookie(null, "token_admin", token);
  jsCookie.set("token_admin", JSON.stringify(token));
  if (typeof window !== "undefined") {
    // Client-side-only code
    window.location.href = "/homepage_after_login";
  }
};
