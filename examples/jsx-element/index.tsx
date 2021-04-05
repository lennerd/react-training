import React from "react";
import ReactDOM from "react-dom";

// element = <h1 className="greeting">Hallo WPS!</h1>;
// … wird umgewandelt in …
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hallo WPS!"
);

console.log(element);
// {
//   type: "h1",
//   props: {
//     className: 'greeting',
//     children: 'Hallo WPS!',
//   }
// }

ReactDOM.render(element, document.getElementById("root"));
