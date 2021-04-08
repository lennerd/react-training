import { Switch, Route } from "react-router-dom";
import HeroLister from "./HeroLister";
import HeroViewer from "./HeroViewer";

export default function Heroes() {
  return (
    <Switch>
      <Route path="/heroes" exact>
        <HeroLister />
      </Route>
      <Route path="/heroes/:slug">
        <HeroViewer />
      </Route>
    </Switch>
  );
}
