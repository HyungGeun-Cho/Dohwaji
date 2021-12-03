import "./MainPage.scss";
import MainPageHeader from "./MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { FcEditImage } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import {useHistory} from "react-router-dom";


const MainPage = () => {

    const { username } = useAuthContext();
    const history = useHistory();

    const handleIntroClick = (e) => {
        history.push("./intro");
    };

    return (
        <div className="MainPage">
           <MainPageHeader/>
            <div className={"MainPageWrapper"}>

            </div>

            <div className={"MainPageText1"}>
                <h1>안녕하세요, {localStorage.getItem("username")} 님!</h1>
            </div>

            <div className={"MainPageText2"}>
                <h1>오늘은 어떤 도시 이야기를 그려볼까요?</h1>
            </div>

            <div className={"MainPageText3"}>
                <h1>모바일 서비스는 조만간 출시 예정입니다!!</h1>
            </div>

            <div className={"MainPageText4"}>
                <h1>(PC의 경우, 화면 너비를 키워주세요)</h1>
            </div>


            <button className={"WriteButton"}><FcEditImage/>{`     `+` 이야기 기록하기`}</button>
            <button className={"IntroButton"} onClick={handleIntroClick}><FcAbout/>{`     `+` 도화지 소개`}</button>



        </div>
    );
};

export default MainPage;
