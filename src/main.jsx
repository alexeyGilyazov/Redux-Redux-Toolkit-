import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import App1 from "./App1.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App1 /> */}
      <App2 />
    </Provider>
  </>
);
