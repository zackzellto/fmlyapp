import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import i18n from "./i18n";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  // const { t } = useTranslation();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/" element={<Root />} /> */}
        <Route path="/home" index element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

// const Root = () => {
//   return (
//     <div className="Root">
//       <Link to="/">Home</Link>
//       <Link to="/data">Data</Link>
//     </div>
//   );
// };
export default App;
