import { ThemeProvider } from "./app/providers/themeprovider";
import Route from "./app/routes/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ToastContainer />
      <Route />
    </ThemeProvider>
  );
}

export default App;
