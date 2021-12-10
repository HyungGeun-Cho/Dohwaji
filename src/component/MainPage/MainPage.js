import "./MainPage.scss";
import MainPageHeader from "./MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { FcEditImage } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import {useHistory} from "react-router-dom";
import MainColorLogo from "../../photos/MainColorLogo.svg";
import MyDohwaji from "../../photos/MyDohwaji.svg";
import MySketchbook from "../../photos/MySketchbook.svg";
import EveryDohwaji from "../../photos/EveryDohwaji.svg";
import StoryPlaza from "../../photos/StoryPlaza.svg";
import DrawDohwaji from "../../photos/DrawDohwaji.svg";
import {toast} from "react-toastify";


const MainPage = () => {


    const { handleLogout } = useAuthContext();

    const history = useHistory();

    const handleTitleClick = (e) => {
        history.push("./main");
    };

    const handleMyStoryClick = (e) => {
        history.push("./mystory");
    };

    const handleMySketchbookClick = (e) => {
        toast.warning("서비스 준비 중입니다 :)");
    };

    const handleEveryStoryClick = (e) => {
        history.push("./everystory");
    };

    const handlePlazaClick = (e) => {
        history.push("./plaza");
    };

    const handleWriteClick = (e) => {
        toast.warning("서비스 준비 중입니다 :)");
    };

    const handleIntroClick = (e) => {
        history.push("./intro");
    };

    return (
        <div className="MainPage">
            <div className={"MainPageWrapper"}>

            </div>

            <div className={"MainPageText1"}>
                <span className={"MainPageText1_id"}>{localStorage.getItem("username")}</span> 님,
            </div>

            <div className={"MainPageText1_mobile"}>
                <h1>안녕하세요, {localStorage.getItem("username")} 님!</h1>
            </div>

            <div className={"MainPageText2"}>
                <p>오늘은 어떤 도시 이야기를 그려볼까요?</p>
            </div>

            <div className={"MainPageText3"}>
                <h1>모바일 서비스는<br/>조만간 출시 예정입니다!!</h1>
            </div>

            <div className={"MainPageText4"}>
                <h1>(PC의 경우, 화면 너비를 키워주세요)</h1>
            </div>

            <div className={"MyDohwajiSection"} onClick={handleMyStoryClick}>
                <img className={"MyDohwaji"} src={MyDohwaji}/>
                <p className={"MyDohwajiText"}>나의 도화지</p>
            </div>

            <div className={"MySketchbookSection"} onClick={handleMySketchbookClick}>
                <img className={"MySketchbook"} src={MySketchbook}/>
                <p className={"MySketchbookText"}>나의 스케치북</p>
            </div>

            <div className={"EveryDohwajiSection"} onClick={handleEveryStoryClick}>
                <img className={"EveryDohwaji"} src={EveryDohwaji}/>
                <p className={"EveryDohwajiText"}>모두의 도화지</p>
            </div>

            <div className={"StoryPlazaSection"} onClick={handlePlazaClick}>
                <img className={"StoryPlaza"} src={StoryPlaza}/>
                <p className={"StoryPlazaText"}>이야기 광장</p>
            </div>

            <div className={"DrawDohwajiSection"} onClick={handleWriteClick}>
                <img className={"DrawDohwaji"} src={DrawDohwaji}/>
                <p className={"DrawDohwajiText"}>도화지 그리기</p>
            </div>


            {/*<button className={"WriteButton"}><FcEditImage/>{`     `+` 이야기 기록하기`}</button>*/}
            <button className={"IntroButton"} onClick={handleIntroClick}>도화지 소개</button>

            <button className={"MainLogoutButton"} onClick={handleLogout}>로그아웃</button>

            <img className={"MainMainLogo"} src={MainColorLogo}/>



        </div>
    );
};

export default MainPage;
