import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Heroes from "./hero/Heroes";

export default function TourOfHeroes() {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <header>
          <h1 className="font-bold text-4xl text-blue-600">Tour of Heroes</h1>
          <nav className="mt-4">
            <ul className="flex divide-x -ml-3">
              <li className="px-3">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    [
                      "inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300",
                      isActive && "bg-pink-200 hover:bg-pink-300",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  to="/heroes"
                  className={({ isActive }) =>
                    [
                      "inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300",
                      isActive && "bg-pink-200 hover:bg-pink-300",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  Heroes
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="border-t mt-4 pt-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/heroes/*" element={<Heroes />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
