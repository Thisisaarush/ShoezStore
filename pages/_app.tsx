import "../styles/globals.css";
import type { AppProps } from "next/app";

// redux
import { store } from "../src/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
