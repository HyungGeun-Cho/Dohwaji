import "./MyStoryPage.css";
import { useEffect } from "react";
import {useAuthContext} from "../../context/AuthContext";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import MainLogo from "../../photos/MainLogo.svg";
import MyStoryPostItem from "./MyStoryPostItem";


const MyStoryPostDummyData = [
    {
        id: 1,
        title: "종로 피맛길에 담긴 이야기",
        location: "서울시 종로구",
        storytime:"조선시대 중기",
        uploadtime:"2021.12.10 오후 9시 23분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 2,
        title: "서울로 7017과 도시재생",
        location: "서울역",
        storytime:"2017.11.09 오후 1시 10분",
        uploadtime:"2021.12.08 오후 4시 13분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 3,
        title: "서울대학교 301동 너무 멀어...",
        location: "서울대학교",
        storytime:"2021.12.01 오후 7시 00분",
        uploadtime:"2021.12.01 오후 10시 00분",
        postimage: "./busanstreet.JPG"
    },
    {
        id: 4,
        title: "부산 해방촌 골목길에서",
        location: "부산특별시시 해방촌",
        storytime:"2019.08.09 오전 11시 20분",
        uploadtime:"2021.11.30 오후 5시 23분",
        postimage: "./busanstreet.JPG"
    },
];

const MyStoryPage = () => {

    const { username } = useAuthContext();

    const { kakao } = window;

    useEffect(()=>{
        var mapContainer = document.getElementById('MyStoryMap'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.520961, 126.984449), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
            {
                title: '부산',
                latlng: new kakao.maps.LatLng(35.169377, 129.025852)
            },
            {
                title: '종로',
                latlng: new kakao.maps.LatLng(37.572006, 126.981692)
            },
            {
                title: '서울로7017',
                latlng: new kakao.maps.LatLng(37.554889, 126.969404)
            },
            {
                title: '서울대',
                latlng: new kakao.maps.LatLng(37.461300, 126.95)
            }
        ];

// 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://github.com/HyungGeun-Cho/SpaceDiary/blob/NewDesign/src/component/EveryStoryPage/mapmarker.svg";

        for (var i = 0; i < positions.length; i ++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                // image : markerImage // 마커 이미지
            });
        }
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
