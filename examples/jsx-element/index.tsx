import React from "react";
import ReactDOM from "react-dom";

// element = <h1 className="text-red-500">Hallo WPS!</h1>;
// … wird umgewandelt in …
const element = React.createElement(
  "h1",
  { className: "text-red-500" },
  "Hallo WPS!"
);

console.log(element);
// {
//   type: "h1",
//   props: {
//     className: 'text-red-500',
//     children: 'Hallo WPS!',
//   }
// }

ReactDOM.render(element, document.getElementById("root"));
