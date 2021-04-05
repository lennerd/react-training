import React from "react";
import ReactDOM from "react-dom";

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

const users: User[] = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
  },
  {
    firstName: "Ben",
    lastName: "Solo",
  },
  {
    firstName: "Leia",
    lastName: "Organa",
  },
  {
    firstName: "Darth",
    lastName: "Vader",
  },
];

const list = (
  <ul>
    {users.map((user) => (
      <li>{formatName(user)}</li>
    ))}
  </ul>
);

ReactDOM.render(list, document.getElementById("root"));
