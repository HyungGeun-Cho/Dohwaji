import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { useAuthContext } from "./context/AuthContext";

function RestrictedRoute({ component: Component, restricted, ...rest }) {
    // const { isLogin } = useAuthContext();

    if (restricted === false) {
        return (
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem("token") ? (
                        <Redirect to="/main" /> // 로그인 되어있을 경우 무조건 /students로
                    ) : (
                        <Component {...props} />
                    )
                }
            />
        );
    } else {
        return (
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem("token") ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" /> // 로그인 되어있지 않을 경우 무조건 /login으로
                    )
                }
            />
        );
    }
}

export default RestrictedRoute;
