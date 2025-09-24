import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
