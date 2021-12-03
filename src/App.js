import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import LoginPage from "./component/LoginPage/LoginPage";
import MainPage from "./component/MainPage/MainPage";
import MyStoryPage from "./component/MyStoryPage/MyStoryPage";
import IntroPage from "./component/IntroPage/IntroPage";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <RestrictedRoute
                exact
                path="/login"
                restricted={false}
                component={LoginPage}
            />
            <RestrictedRoute
                exact
                path="/main"
                restricted={true}
                component={MainPage}
            />
            <RestrictedRoute
                exact
                path="/mystory"
                restricted={true}
                component={MyStoryPage}
            />
            <RestrictedRoute
                exact
                path="/intro"
                restricted={true}
                component={IntroPage}
            />
            <Redirect to="/main"/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
