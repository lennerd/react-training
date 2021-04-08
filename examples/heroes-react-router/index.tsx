import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import TourOfHeroes from "./TourOfHeroes";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Router>
      <TourOfHeroes />
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
