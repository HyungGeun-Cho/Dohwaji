import "./MainPageHeader.scss";
import { useAuthContext } from "../../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLogo from "../../../photos/MainLogo.svg";


const MainPageHeader = () => {

    const { username, handleLogout } = useAuthContext();

    const history = useHistory();

    const handleTitleClick = (e) => {
        history.push("./main");
    };

    const handleMyStoryClick = (e) => {
        history.push("./mystory");
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

    console.log(window.location.pathname)

    return (
        <header className={"MainPageHeader"}>


            <button className={"Title"} onClick={handleTitleClick}>도화지</button>

            <button className={"EveryStoryPageButton"} onClick={handleEveryStoryClick}>
                모두의 도화지
            </button>

            <button className={"PlazaPageButton"} onClick={handlePlazaClick}>
                도화지 광장
            </button>

            <button className={"NewPostButton"} onClick={handleWriteClick}>
                도화지 그리기
            </button>

            <button className={window.location.pathname==="/mystory"?"MyStoryPageButton_MyStoryPage" : "MyStoryPageButton"} onClick={handleMyStoryClick}>
                나의 도화지
            </button>

            <button className={"LogoutButton"} onClick={handleLogout}>
                로그아웃
            </button>


        </header>
    );
};

export default MainPageHeader;
