import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import GlobalErrorBoundary from "./common/components/ErrorBoundary.jsx";
import MaintenanceMode from "./common/components/Maintainence.jsx";
import InternetStatus from "./common/components/InternetStatus.jsx";
import { store } from "./app/stores/index.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalErrorBoundary>
    <Provider store={store}>
      <MaintenanceMode />
      <InternetStatus />
      <App />
    </Provider>
  </GlobalErrorBoundary>
);
