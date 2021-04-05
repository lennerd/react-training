import React from "react";
import ReactDOM from "react-dom";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

const user: User = {
  firstName: "Workplace",
  lastName: "Solutions",
};

function getGreeting(user?: User) {
  if (user != null) {
    return <h1>Hallo {formatName(user)}!</h1>;
  }

  return <h1>Hallo Fremder!</h1>;
}

ReactDOM.render(getGreeting(user), document.getElementById("root"));
