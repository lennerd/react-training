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

const element = <h1>Hallo {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
