import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import TourOfHeroes from "./src/TourOfHeroes";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TourOfHeroes />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
