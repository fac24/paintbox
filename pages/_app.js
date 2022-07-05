import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
      <ContextProvider> 
        <Component {...pageProps} />
      </ContextProvider>
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;

//wrapping all props in the ContextProvider allows us to access users' username and secret no matter what page they're on */} */}

