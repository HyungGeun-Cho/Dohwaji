import "./PlazaPage.scss";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import {useAuthContext} from "../../context/AuthContext";
import { BsBrush } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import PostItem from "./PostItem";

const PlazaPage = () => {

    return (
        <div className="PlazaPage">
            <MainPageHeader/>

            <div className={"RecommendSection"}>
                <div className={"SectionTitle"}>이야기 추천</div>
                <div className={"SectionList"}/>
                <div className={"RecommendItem"}>
                    <div className={"ItemTitle"}>"우리 동네 놀이터에 누군가 산다"</div>
                    <div className={"ItemStorySection"}>
                        <div className={"ItemTimeText"}>이야기 시간</div>
                        <div className={"ItemTime"}>2021.12.13. 오후 7시경</div>
                    </div>
                    <div className={"ItemUploadSection"}>
                        <div className={"ItemTimeText"}>업로드 시간</div>
                        <div className={"ItemTime"}>2021.12.14. 오후 9시 13분</div>
                    </div>
                </div>
            </div>

            <div className={"TrendSection"}>
                <div className={"SectionTitle"}>지금 뜨는 이야기</div>
                <div className={"SectionList"}/>
                <div className={"TrendItem"}>
                    <div className={"ItemTitle"}>"길고양이 나비가 새끼를 낳았어요""</div>
                    <div className={"ItemStorySection"}>
                        <div className={"ItemTimeText"}>이야기 시간</div>
                        <div className={"ItemTime"}>2021.12.10. 오후 7시경</div>
                    </div>
                    <div className={"ItemUploadSection"}>
                        <div className={"ItemTimeText"}>업로드 시간</div>
                        <div className={"ItemTime"}>2021.12.11. 오전 3시 30분</div>
                    </div>
                </div>
            </div>

            <div className={"NeighborhoodSection"}>
                <div className={"SectionTitle"}>우리 동네 이야기</div>
                <div className={"SectionList"}/>
                <div className={"NeighborhoodItem"}>
                    <div className={"ItemTitle"}>"혼맥하기 좋은 벤치를 찾아서"</div>
                    <div className={"ItemStorySection"}>
                        <div className={"ItemTimeText"}>이야기 시간</div>
                        <div className={"ItemTime"}>2021.12.11. 오후 10시경</div>
                    </div>
                    <div className={"ItemUploadSection"}>
                        <div className={"ItemTimeText"}>업로드 시간</div>
                        <div className={"ItemTime"}> 2021.12.14. 오후 7시 2분</div>
                    </div>
                </div>

            </div>







        </div>
    );
};

export default PlazaPage;
