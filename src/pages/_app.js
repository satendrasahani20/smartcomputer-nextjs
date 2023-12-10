import theme from "@/components/layout/theming/theme";
import { store } from "@/service/store";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  );
}
