import "../styles/globals.css";
import { AuthUserProvider } from "../Homework/AuthUserContext";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { redirectUser } from "../utils/api/redirectUser";
function MyApp({ Component, pageProps, token }) {
  return (
   
      <RecoilRoot>
        <Head>
          <script
            async
            src="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.js"
          ></script>
          <link
            href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css"
            rel="stylesheet"
          />
        </Head>
        <AuthUserProvider>
          <Component {...pageProps} user={pageProps.user} />
        </AuthUserProvider>
      
      <ToastContainer />
      </RecoilRoot>
  );
}
/*
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  let authorize = {};
  const token = parseCookies(ctx)?.token_user;
  const publicRoutes =
  ctx.pathname==="/place/[placeId]"
  const protectedRoutes =
    ctx.pathname === "/about_us" ||
    ctx.pathname === "/BaseMap" ||
    ctx.pathname === "/contact_us" ||
    ctx.pathname === "/favorite_page" ||
    ctx.pathname === "/filter_after_login" ||
    ctx.pathname === "/filter_before_login" ||
    ctx.pathname === "/filter_page" ||
    ctx.pathname === "/Filter" ||
    ctx.pathname === "/homepage_after_login" ||
    ctx.pathname === "/post_article"||
    ctx.pathname === "/post_content"
    //ctx.pathname === "/postcontent";
  //ctx.pathname === "/ProfilePage";
  if (!token) {
    if (publicRoutes) {
      return <Component {...pageProps}/>
    } 
    protectedRoutes && redirectUser(ctx, "/");
  } else {
    if(publicRoutes){
      <Component {...pageProps} user={pageProps?.user} />
    }
    try {
      authorize = JSON.parse(token);
    } catch (error) {
      destroyCookie(ctx, "token_user");
      redirectUser("/");
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/place/current_user`, {
        headers: {
          "x-access-token": authorize.token,
        },
      });
      const user = res.data;
      console.log(user)
      if (user) !protectedRoutes && redirectUser(ctx, "/homepage_after_login");
      pageProps.user = user;
      pageProps.token = authorize;
    } catch (error) {
      console.log(error);
      destroyCookie(ctx, "token_user");
      redirectUser("/");
    }
  }
  return { pageProps, token };
};
*/

export default MyApp;
