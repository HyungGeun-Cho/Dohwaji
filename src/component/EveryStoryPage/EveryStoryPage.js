import "./EveryStoryPage.css";
import { useEffect } from "react";
import {useAuthContext} from "../../context/AuthContext";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";
import MainLogo from "../../photos/MainLogo.svg";
import { BsFillArrowDownCircleFill} from "react-icons/bs";


const EveryStoryPage = () => {

    const { username } = useAuthContext();

    const { kakao } = window;

    useEffect(()=>{
        var mapContainer = document.getElementById('EveryStoryMap'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.520961, 126.984449), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
            {
                title: '종로',
                latlng: new kakao.maps.LatLng(37.572006, 126.981692)
            },
            {
                title: '한강',
                latlng: new kakao.maps.LatLng(37.504691, 126.988785)
            },
            {
                title: '텃밭',
                latlng: new kakao.maps.LatLng(37.541300, 127)
            },
            {
                title: '서울대',
                latlng: new kakao.maps.LatLng(37.461300, 126.95)
            },
            {
                title: '여의도',
                latlng: new kakao.maps.LatLng(37.524579, 126.926469)
            },
            {
                title: '강남',
                latlng: new kakao.maps.LatLng(37.497938, 127.027382)
            },
            {
                title: '근린공원',
                latlng: new kakao.maps.LatLng(37.461300, 126.95)
            },
            {
                title: '남산공원',
                latlng: new kakao.maps.LatLng(37.550923, 126.990131)
            },
            {
                title: '광화문',
                latlng: new kakao.maps.LatLng(37.575573, 126.976651)
            },
            {
                title: '신촌',
                latlng: new kakao.maps.LatLng(37.565374, 126.941332)
            },
            {
                title: '용산공원',
                latlng: new kakao.maps.LatLng(37.528948, 126.979074)
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
        // var container = document.getElementById('EveryStoryMap');
        // var options = {
        //     center: new kakao.maps.LatLng(37.549054, 126.993176),
        //     level: 8
        // };
        // var map = new kakao.maps.Map(container, options);
        //
        // // 마커를 표시할 위치와 title 객체 배열입니다
        // var positions = [
        //     {
        //         title: '카카오',
        //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        //     },
        //     {
        //         title: '생태연못',
        //         latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        //     },
        //     {
        //         title: '텃밭',
        //         latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        //     },
        //     {
        //         title: '근린공원',
        //         latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        //     }
        // ];
        //
        // // 마커 이미지의 이미지 주소입니다
        // var imageSrc = "./mapmarker.svg";
        //
        // for (var i = 0; i < positions.length; i ++) {
        //
        //     // 마커 이미지의 이미지 크기 입니다
        //     var imageSize = new kakao.maps.Size(24, 35);
        //
        //     // 마커 이미지를 생성합니다
        //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        //
        //     // 마커를 생성합니다
        //     var marker = new kakao.maps.Marker({
        //         map: map, // 마커를 표시할 지도
        //         position: positions[i].latlng, // 마커를 표시할 위치
        //         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        //         image : markerImage // 마커 이미지
        //     });
        // }


    }, []);

    return (
        <div className="EveryStoryPage">
            <MainPageHeader/>


            <div className={"EveryStoryMapContainer"}>
                <div id="EveryStoryMap"></div>
            </div>

            <select
                className={"EveryStoryTimeSelect"}
                name="Time"
            >
                <option value={null}>시간별</option>
                <option value="story">이야기 시간</option>
                <option value="upload">업로드 시간</option>
            </select>
            <select
                className={"EveryStoryPopularSelect"}
                name="Popular"
            >
                <option value={null}>인기별</option>
                <option value="writer">인기 작가</option>
                <option value="story">인기 이야기</option>
            </select>

            <select
                className={"EveryStoryLocationSelect"}
                name="Location"
            >
                <option value={null}>위치별</option>
                <option value="writer">현위치</option>
                <option value="story">주소입력</option>
            </select>

            <input className={"EveryStorySearchInput"}placeholder={"검색어를 입력하세요."}/>
            <button className={"EveryStorySearchButton"}>검색</button>
            <button className={"Tag1"}># 태그</button>
            <button className={"Tag2"}># 태그</button>

            <img className={"EveryStoryMainLogo"} src={MainLogo}/>



        </div>
    );
};

export default EveryStoryPage;
