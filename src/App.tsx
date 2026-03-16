import { Switch, Route } from "wouter";
import LandingPage from "@/pages/LandingPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/landing" component={LandingPage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      {/* Catch-all: redirect to landing */}
      <Route>{() => <LandingPage />}</Route>
    </Switch>
  );
}

export default App;
