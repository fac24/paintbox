import { ContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    //wrapping all props in the ContextProvider allows us to access users' username and secret no matter what page they're on
  <ContextProvider> 
  <Component {...pageProps} />
  </ContextProvider>
  );
}

export default MyApp;
