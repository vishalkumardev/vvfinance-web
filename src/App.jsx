import { ThemeProvider } from "./app/providers/themeprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./app/routes/Route";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ToastContainer />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
