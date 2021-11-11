import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();

    const handleLogin = () => {
        localStorage.setItem("token", true);  // localStorage에 token 아이템 설정
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            history.push("/main");
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
                <div className={"LoginPageUsername"}>
                    <div className={"LoginPageInputText"}>아이디</div>
                    <input className={"LoginPageInputBoxUsername"}
                           onKeyPress={(e) => handleKeyPress(e)}></input>
                </div>

                <div className={"LoginPagePassword"}>
                    <div className={"LoginPageInputText"}>비밀번호</div>
                    <input className={"LoginPageInputBoxPassword"} type="password"
                           onKeyPress={(e) => handleKeyPress(e)}></input>
                </div>
                <Link to={"/main"}>
                    {/* 로그인 버튼을 누르면 localStorage 토큰 생성 */}
                    <button className={"LoginButton"} onClick={handleLogin}>
                        시작하기
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;