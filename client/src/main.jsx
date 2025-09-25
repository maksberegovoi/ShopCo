import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //
  //   </PersistGate>
  // </Provider>
  <App />,
);
