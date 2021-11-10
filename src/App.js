import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import LoginPage from "./component/LoginPage/LoginPage";
import MainPage from "./component/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <RestrictedRoute
                exact
                path="/login"
                restricted={true}
                component={LoginPage}
            />
            <RestrictedRoute
                exact
                path="/main"
                restricted={true}
                component={MainPage}
            />
            <Redirect to="/main"/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
