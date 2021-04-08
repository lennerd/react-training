import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
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
                  className="inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300"
                  activeClassName="bg-pink-200 hover:bg-pink-300"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  to="/heroes"
                  className="inline-block px-3 py-1 bg-blue-200 rounded hover:bg-blue-300"
                  activeClassName="bg-pink-200 hover:bg-pink-300"
                >
                  Heroes
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="border-t mt-4 pt-4">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route path="/" exact>
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}
