import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";
import firebase from "firebase/compat/app";
import Routes from "./routes";

const App = (props) => {
  return <Routes {...props} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  //ReactDOM.render(<App user={user} />, document.getElementById("root"));
  root.render(<App user={user} />);
});
