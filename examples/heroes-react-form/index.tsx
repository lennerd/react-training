import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HeroLister from "./HeroLister";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <HeroLister />
  </QueryClientProvider>,
  document.getElementById("root")
);
