import { Provider } from "react-redux";
import { wrapper } from "../src/app/store";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
//testing//

export default MyApp;
