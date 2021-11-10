import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const handleLogin = () => {
        localStorage.setItem("token", true);  // localStorage에 token 아이템 설정
    };

    return (
        <div className={"LoginPage"}>
            {/* 로그인 페이지 로고 및 Login 텍스트 */}
            <div className={"LoginPageHeader"}>
                <div className={"LoginPageWelcomeText"}>Login</div>
            </div>

            {/* Username, Password, Login 버튼 */}
            <div className={"LoginPageMain"}>
                <div className={"LoginPageUsername"}>
                    <div className={"LoginPageInputText"}>Username</div>
                    <input className={"LoginPageInputBoxUsername"}></input>
                </div>

                <div className={"LoginPagePassword"}>
                    <div className={"LoginPageInputText"}>Password</div>
                    <input className={"LoginPageInputBoxPassword"}></input>
                </div>
                <Link to={"/students"}>
                    {/* 로그인 버튼을 누르면 localStorage 토큰 생성 */}
                    <button className={"LoginButton"} onClick={handleLogin}>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;