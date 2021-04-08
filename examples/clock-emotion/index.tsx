import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body,
        html {
          margin: 0;
          height: 100%;
        }

        body {
          padding: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: lightgrey;
        }

        #root {
          height: 100%;
        }
      `}
    />
    <App />
  </>,
  document.getElementById("root")
);
