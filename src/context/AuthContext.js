import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true); // 이 부분을 false로 하면 url 바로 접속 시 오류 (렌더 순서 차이..?)
    const [username, setUsername] = useState();
    const [userPassword, setUserPassword] = useState();
    // const [userToken, setUserToken] = useState(localStorage.getItem("token"));

    const history = useHistory();

    useEffect(() => {
        setIsLogin(JSON.parse(localStorage.getItem("isLogin"))); // 자동 로그인 여부 불러오기
        // setUserToken(localStorage.getItem("token")); // 자동 로그인 후 토큰 정보 불러오기
    }, []);

    const handleLogin = () => {

        console.log(username);
        console.log(userPassword);

        if(username !=="" && userPassword === "test1234!"){
            // localStorage.setItem("token", token); // 토큰 공개 보안 문제!!! (일단 이번에는 우선 구현부터)
            setIsLogin(true);
            localStorage.setItem("isLogin", true);
            localStorage.setItem("username", username);
            // setUsername("");
            setUserPassword("");
            toast.success("로그인 되었습니다.");
        }
        else{
            localStorage.setItem("isLogin", false);
            toast.error("ID와 PW를 다시 확인해주세요!");
        }
    };

    const handleLogout = () => {
        setIsLogin(false);
        localStorage.setItem("isLogin", false);
        localStorage.setItem("username", "");
        // setUserToken("");
        // localStorage.setItem("token", "");
        toast.success("로그아웃 되었습니다.");
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
                username,
                setUsername,
                userPassword,
                setUserPassword,
                handleLogin,
                handleLogout,
            }}
        >
            {/* Same as */}
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
