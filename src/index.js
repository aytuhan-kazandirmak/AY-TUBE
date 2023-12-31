import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyProvider from "./component/context/ContextProvider";
import MyAuthProvider from "./component/context/ContextAuth";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyAuthProvider>
    <MyProvider>
      <App />
    </MyProvider>
  </MyAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
