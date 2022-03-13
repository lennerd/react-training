import { Navigate, Route, Routes } from "react-router-dom";
import HeroLister from "./HeroLister";
import HeroViewer from "./HeroViewer";

export default function TourOfHeroes() {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="font-bold text-4xl text-blue-600">Tour of Heroes</h1>

      <main className="border-t mt-4 pt-4">
        <Routes>
          <Route path="/heroes" element={<HeroLister />} />
          <Route path="/heroes/:slug" element={<HeroViewer />} />
          <Route path="/" element={<Navigate to="heroes" />} />
        </Routes>
      </main>
    </div>
  );
}
