import { Switch, Route } from "react-router-dom";
import HeroLister from "./HeroLister";
import HeroEditor from "./HeroEditor";

export default function Heroes() {
  return (
    <Switch>
      <Route path="/heroes" exact>
        <HeroLister />
      </Route>
      <Route path="/heroes/:slug">
        <HeroEditor />
      </Route>
    </Switch>
  );
}
