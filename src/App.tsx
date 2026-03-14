import { Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/landing" component={LandingPage} />
      {/* Catch-all: redirect to landing */}
      <Route>{() => <LandingPage />}</Route>
    </Switch>
  );
}

export default App;
