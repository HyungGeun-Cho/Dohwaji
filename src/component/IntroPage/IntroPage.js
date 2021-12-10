import "./IntroPage.scss";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { BsBrush } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";


const IntroPage = () => {

    return (
        <div className="IntroPage">
            <MainPageHeader/>
            <div className={"IntroPageWrapper"}>
                <h1 className={"IntroTitle"}><span color={"dark"}></span>도화지; 도시에 이야기를 그리다<span className={"IntroTitle_small"}>는</span></h1>

            <p className={"IntroDetail"}>도시민 저마다의 이야기가 모이는<br/>새로운 공간 기반 이야기 플랫폼입니다.<br/>
            <br/>여러분의 이야기를 <BsBrush/> <b>'나의 도화지'</b>에 담아보세요!<br/>공간에 담긴 다른 사람들의 이야기를 <BsMap/> <b>'모두의 도화지'</b>를 확인해보세요.
            <br/><BsGrid3X3Gap/> <b>'이야기 광장'</b>에서는 색다른 이야기 글들을 확인해볼 수 있답니다.<br/>
            <br/><b>그럼 우리의 도시, 우리의 공간에 이야기가 넘쳐나길 기대할게요!</b></p>


            <h1 className={"TeamTitle"}>2021-2 서울대학교 도시설계 팀 프로젝트</h1>

            <p className={"TeamMember"}>남휘근, 김윤빈, 김별, 조형근</p>
            <p className={"TeamDeveloper"}>Designed by 김별 / Web Developed by 조형근</p>

            <a href="https://github.com/HyungGeun-Cho/SpaceDiary/tree/master">
                <GoMarkGithub className = "GithubIcon"></GoMarkGithub>
            </a>

            </div>




        </div>
    );
};

export default IntroPage;
