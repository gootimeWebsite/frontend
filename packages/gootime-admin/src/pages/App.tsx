import * as React from 'react';
import { Prompt } from 'react-router';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import * as cookie from 'react-cookies';
import LoginPage from './login/LoginPage';
import ArticlePage from './Article/ArticlePage';

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
        cookie.load('token') === '123123' ? (
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
  const jumpToArticle = () => {
    return <Redirect to="/article" />;
  };
  return (
    <div>
      <Router>
        <Prompt
          message={location => {
            if (cookie.load('token')) {
              jumpToArticle();
            }
            return true;
          }}
        />
        <Route
          path="/"
          render={() => {
            return <Redirect to="/article" />;
          }}
        />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/article" component={ArticlePage} />
      </Router>
    </div>
  );
};

export default App;
