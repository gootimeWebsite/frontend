import * as React from "react";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import LoginPage from "./login/LoginPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route
          path="/"
          render={() => {
            // Check token. If not login then redirect to login
            // if (false) {
            return <Redirect to="/login" />;
            // } else {
            //   return <Redirect to="/article" />;
            // }
          }}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/article" render={() => <div>article</div>} />
      </Router>
    </div>
  );
};

export default App;
