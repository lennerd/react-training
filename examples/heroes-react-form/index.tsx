import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import TourOfHeroes from "./TourOfHeroes";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <TourOfHeroes />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
