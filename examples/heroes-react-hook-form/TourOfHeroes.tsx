import { Routes, Route, Navigate } from "react-router-dom";
import HeroEditor from "./HeroEditor";
import HeroLister from "./HeroLister";
import HeroViewer from "./HeroViewer";

export default function TourOfHeroes() {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="font-bold text-4xl text-blue-600">Tour of Heroes</h1>

      <main className="border-t mt-4 pt-4">
        <Routes>
          <Route path="/heroes">
            <Route path="" element={<HeroLister />} />
            <Route path=":slug">
              <Route path="" element={<HeroViewer />} />
              <Route path="edit" element={<HeroEditor />} />
            </Route>
          </Route>
          <Route path="" element={<Navigate to="/heroes" />} />
        </Routes>
      </main>
    </div>
  );
}
