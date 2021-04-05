import React from "react";
import ReactDOM from "react-dom";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

const users: User[] = [
  {
    id: 1,
    firstName: "Luke",
    lastName: "Skywalker",
  },
  {
    id: 2,
    firstName: "Ben",
    lastName: "Solo",
  },
  {
    id: 3,
    firstName: "Leia",
    lastName: "Organa",
  },
  {
    id: 4,
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
