import "./PlazaPage.scss";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { BsBrush } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import PostItem from "./PostItem";

const dummyData = [
    {
        id: 1,
        title: "피맛길의 흔적을 찾아서",
        location: "종로 피맛길",
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 2,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 3,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 4,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 5,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 5,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 5,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
    {
        id: 5,
        title: "깃허브",
        content: 1,
        postimage:
            "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
        author: "test@waffle.hs.kr",
        like: "000-0000-0000",
        comment: "frontend"
    },
];


const PlazaPage = () => {

    return (
        <div className="PlazaPage">
            <MainPageHeader/>

            <div className={"PlazaPageWrapper"}>
                <ul className={"PostList"}>
                    {dummyData.map((item) => (
                        <PostItem item={item} key={item.id} />
                    ))}
                </ul>

            </div>




        </div>
    );
};

export default PlazaPage;
