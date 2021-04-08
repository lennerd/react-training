import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import TourOfHeroes from "./src/TourOfHeroes";

const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <TourOfHeroes />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
