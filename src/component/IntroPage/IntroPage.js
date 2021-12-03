import "./IntroPage.scss";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { FcEditImage } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";


const IntroPage = () => {

    return (
        <div className="IntroPage">
            <MainPageHeader/>
            <h1 className={"IntroTitle"}>도화지, 도시에 이야기를 그리다.</h1>

            <p className={"IntroDetail"}>공간 기반의 새로운 이야기 플랫폼.<br/>공간을 중심으로 우리의 이야기를 기록하고 싶어 만들게 되었습니다.</p>


            <h1 className={"TeamTitle"}>2021-2 서울대학교 도시설계 팀 프로젝트</h1>

            <p className={"TeamMember"}>남휘근, 김윤빈, 김별, 조형근</p>
            <p className={"TeamDeveloper"}>Website Developed by 조형근 / Github 오픈소스</p>

            <a href="http://www.naver.com">
                <GoMarkGithub className = "GithubIcon"></GoMarkGithub>
            </a>




        </div>
    );
};

export default IntroPage;
