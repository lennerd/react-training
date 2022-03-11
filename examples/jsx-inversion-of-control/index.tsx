import React from "react";
import ReactDOM from "react-dom";
import FormControl from "./FormControl";

const element = (
  /*
  Ich möchte den Hilfetext in Klammern
  besonders hervorheben, aber wie?
  */
  <FormControl label="Name (nur der Vorname)">
    <input type="text" />
  </FormControl>
);

ReactDOM.render(element, document.getElementById("root"));
