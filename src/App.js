import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Switch} from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import LoginPage from "./component/LoginPage/LoginPage";
import MainPage from "./component/MainPage/MainPage";
import MyStoryPage from "./component/MyStoryPage/MyStoryPage";
import IntroPage from "./component/IntroPage/IntroPage";
import PlazaPage from "./component/PlazaPage/PlazaPage";
import Spring from "./component/Spring/Spring";
import EveryStoryPage from "./component/EveryStoryPage/EveryStoryPage";

function App() {
    return (
        <>
            <Spring/>
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
                    <RestrictedRoute
                        exact
                        path="/everystory"
                        restricted={true}
                        component={EveryStoryPage}
                    />
                    <RestrictedRoute
                        exact
                        path="/plaza"
                        restricted={true}
                        component={PlazaPage}
                    />
                    <Redirect to="/main"/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
