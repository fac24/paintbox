import Layout from "../components/layout/Layout";
// import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    // </SessionProvider>
  );
}

export default MyApp;


