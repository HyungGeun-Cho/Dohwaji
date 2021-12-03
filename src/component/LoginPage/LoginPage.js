import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import {toast} from "react-toastify";


const LoginPage = () => {

    // const [tempUsername, setTempUsername] = useState("");
    // const [tempUserPassword, setTempUserPassword] = useState("");

    const { username, setUsername, userPassword, setUserPassword, handleLogin, setIsLogin, userToken } = useAuthContext();

    const history = useHistory();

    // const handleLogin = () => {
    //     if(tempUsername == "HyungGeun" && tempUserPassword == "urban1234!"){
    //         // localStorage.setItem("token", token); // 토큰 공개 보안 문제!!! (일단 이번에는 우선 구현부터)
    //         setIsLogin(true);
    //         localStorage.setItem("isLogin", true);
    //         setUsername("");
    //         setUserPassword("");
    //         toast.success("로그인 되었습니다.");
    //         history.push("/main");
    //     }
    //     else{
    //         localStorage.setItem("isLogin", false);
    //         toast.error("ID와 PW를 다시 확인해주세요!");
    //     }
    // };


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleLogin();
        }
    };

    return (
        <div className={"LoginPage"}>
            {/* 로그인 페이지 로고 및 Login 텍스트 */}
            <div className={"LoginPageHeader"}>
                <div className={"LoginPageWelcomeText"}>도화지</div>
            </div>

            <div className={"LoginPageSubText"}>도시에 이야기를 그리다,</div>


            {/* Username, Password, Login 버튼 */}
            <div className={"LoginPageMain"}>
                <form className={"LoginPageUsername"} onsubmit="return false;">
                    <div className={"LoginPageInputText"}>아이디</div>
                    <input className={"LoginPageInputBoxUsername"} type="text"
                           onChange={(e) => setUsername(e.target.value)}
                           onKeyPress={(e) => handleKeyPress(e)}></input>
                </form>

                <form className={"LoginPagePassword"} onsubmit="return false;">
                    <div className={"LoginPageInputText"}>비밀번호</div>
                    <input className={"LoginPageInputBoxPassword"} type="password"
                           placeholder={"초기PW: test1234!"}
                           onChange={(e) => setUserPassword(e.target.value)}
                           onKeyPress={(e) => handleKeyPress(e)}></input>
                </form>

                {/* 로그인 버튼을 누르면 localStorage 토큰 생성 */}
                <button className={"LoginButton"} onClick={handleLogin}>
                    시작하기
                </button>

            </div>
        </div>
    );
};

export default LoginPage;