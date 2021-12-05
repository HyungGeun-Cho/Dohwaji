import "./MyStoryPage.css";
import { useEffect } from "react";
import {useAuthContext} from "../../context/AuthContext";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import MainLogo from "../../photos/MainLogo.svg";
import MyStoryPostItem from "./MyStoryPostItem";


const MyStoryPostDummyData = [
    {
        id: 1,
        title: "부산 해방촌 골목길에서",
        location: "부산특별시시 해방촌",
        storytime:"2020.10.09 오후 3시 20분",
        uploadtime:"2021.12.10 오후 9시 23분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 2,
        title: "종로 피맛길에 담긴 이야기",
        location: "서울시 종로구",
        storytime:"2020.10.09 오후 3시 20분",
        uploadtime:"2021.12.10 오후 9시 23분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 3,
        title: "서울로 7017",
        location: "서울역",
        storytime:"2020.10.09 오후 3시 20분",
        uploadtime:"2021.12.10 오후 9시 23분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 4,
        title: "서울대학교 301동의 날씨변화",
        location: "서울대학교",
        storytime:"2020.10.09 오후 3시 20분",
        uploadtime:"2021.12.10 오후 9시 23분",
        postimage: "./busanstreet.JPG"
    }
];

const MyStoryPage = () => {

    const { username } = useAuthContext();

    const { kakao } = window;

    useEffect(()=>{
        var container = document.getElementById('MyStoryMap');
        var options = {
            center: new kakao.maps.LatLng(37.549054, 126.993176),
            level: 8
        };
        var map = new kakao.maps.Map(container, options);

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';

            var resultDiv = document.getElementById('clickLatlng');
            resultDiv.innerHTML = message;

        });
    }, []);

    return (
        <div className="MyStoryPage">
            <MainPageHeader/>

            <div className="MyStoryTitleSection">
                <div className={"MyStoryTitle"}>{localStorage.getItem("username")}의 도화지</div>
                {/*<img className={"MyStoryMainLogo"} src={MainLogo}/>*/}

            </div>

            <div className={"MyStoryMapContainer"}>
                <div id="MyStoryMap"></div>
            </div>

            {/*<div className={"MyStoryTextContainer"}>*/}


            {/*</div>*/}

            <ul className={"MyStoryPostList"}>
                    {MyStoryPostDummyData.map((item) => (
                        <MyStoryPostItem item={item} key={item.id} />
                    ))}
            </ul>


        </div>
    );
};

export default MyStoryPage;
