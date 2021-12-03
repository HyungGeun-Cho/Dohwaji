import "./MyStoryPage.css";
import { useEffect } from "react";
import {useAuthContext} from "../../context/AuthContext";
import MainPageHeader from "../MainPage/MainPageHeader/MainPageHeader";


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
            <div className={"MyStoryMapContainer"}>
                <div id="MyStoryMap"></div>
            </div>


        </div>
    );
};

export default MyStoryPage;
