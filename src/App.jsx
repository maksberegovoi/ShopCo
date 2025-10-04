import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Breadcrumbs from "./UI/Breadcrumb/Breadcrumb.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Breadcrumbs />
      <AppRouter />
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",
            padding: "20px",
            minWidth: "300px",
            borderRadius: "12px",
          },
          success: {
            duration: 1000,
            style: {
              background: "#054D39FF",
              color: "#fff",
              fontSize: "18px",
              padding: "20px",
            },
            iconTheme: {
              primary: "#054D39FF",
              secondary: "white",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#FF0000",
              color: "#fff",
              fontSize: "18px",
              padding: "20px",
              minWidth: "350px",
            },
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
