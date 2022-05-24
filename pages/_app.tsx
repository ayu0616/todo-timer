import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
