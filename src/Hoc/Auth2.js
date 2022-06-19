import React from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../firebase";

/*this isn't working*/

const AuthGuard = (Component) => {
  class AuthHoc extends React.Component {
    authCheck = () => {
      console.log("test123");
      const user = firebase.auth().currentUser;
      if (user) {
        console.log("hey hey");
        return <Component {...this.props} />;
      } else {
        return <Redirect to="/" />;
      }
    };
    render() {
      return this.authCheck;
    }
  }
  return AuthHoc;
};

export default AuthGuard;
