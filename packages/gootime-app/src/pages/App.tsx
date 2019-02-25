import * as React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import HomePage from './home/HomePage';

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  [key: string]: any;
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route path="/home" component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
