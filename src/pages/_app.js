import { store } from "@/store";
import "@/styles/globals.css";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
