import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroEditor from "./HeroEditor";
import HeroLister from "./HeroLister";
import HeroViewer from "./HeroViewer";

export default function Heroes() {
  return (
    <Routes>
      <Route path="" element={<HeroLister />} />
      <Route path=":slug">
        <Route path="" element={<HeroViewer />} />
        <Route path="edit" element={<HeroEditor />} />
      </Route>
    </Routes>
  );
}
