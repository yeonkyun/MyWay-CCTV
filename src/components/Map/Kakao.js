import { useState, useEffect } from 'react';
import { GetCCTVInfo } from '../../apis/GetCCTVInfo';
import axios from 'axios';
const { kakao } = window;

function Kakao(coord) {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  //지도의 줌(확대,축소)레벨
  const [zoomLevel, setZoomLevel] = useState(7);

  //SouthWest 남서쪽 위도, 경도
  const [swLatlng, setSwLatLng] = useState({
    xOne: 0,
    yOne: 0,
  });

  //NorthEast 북동쪽 위도, 경도
  const [neLatlng, setNeLatLng] = useState({
    xTwo: 0,
    yTwo: 0,
  });

  let cctvList = GetCCTVInfo(zoomLevel, swLatlng.xOne, neLatlng.xTwo, swLatlng.yOne, neLatlng.yTwo); //cctv 정보를 불러옵니다.
  // console.log("this", cctvList);

  //cctvch 값 알아오기 위함
  async function getCCTVInfo2(cctvid) {
    try {
      const response = await axios.get(`/map/getCctvInfoById.do?cctvId=${cctvid}`);
      // console.log(`Response for cctvId ${cctvid}:`, response.data); // 응답 데이터 확인
      const { CCTVIP, CH, KIND } = response.data; // 필요한 데이터 추출
      return { CCTVIP, CH, KIND }; // 추출한 데이터 반환
    } catch (error) {
      console.error(`Failed to get CCTV info for ID ${cctvid}`, error);
      return null;
    }
  }


  async function addMarker(List) {
    // 지도 이동 후 새로운 마커 배열을 담을 변수 선언
    let markerArr = [];

    // 마커 이미지
    let imageSrc = 'image/cctvMarker.png';
    let imageSize = new kakao.maps.Size(15, 15);

    if (List !== null) {
      for (let i = 0; i < List.length; i++) {
        /* 마커 정보 설정 */
        // console.log(List[i].cctvid, List[i].xcoord, List[i].ycoord)
        let newMarker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(List[i].ycoord, List[i].xcoord),
          title: List[i].cctvname,
          image: new kakao.maps.MarkerImage(imageSrc, imageSize),
          clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });

        const cctvInfo = await getCCTVInfo2(List[i].cctvid);
        const cctvch = cctvInfo ? cctvInfo.CH : null;
        const cctvip = cctvInfo ? cctvInfo.CCTVIP : null;
        const kind = cctvInfo ? cctvInfo.KIND : 'Unknown';

        /* cctv 새창에서 띄우기 */
        // let cctv_url = `http://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010001&cctvName=상암사거리&kind=Seoul&cctvip=null&cctvch=51&id=1&cctvpasswd=null&cctvport=null`
        // let cctv_url = `http://www.utic.go.kr/view/map/cctvStream.jsp?cctvid=L010001&cctvName=상암사거리&kind=Seoul&cctvip=null&cctvch=51&id=1&cctvpasswd=null&cctvport=null`
        // let cctv_Url = `https://www.utic.go.kr/view/map/openDataCctvStream.jsp?key=${process.env.REACT_APP_UTIC_CCTV_APP_KEY}&cctvid=${List[i].cctvid}&cctvName=${encodeURIComponent(List[i].cctvname)}&kind=${kind}&cctvip=${cctvip}&cctvch=${cctvch}&id=null&cctvpasswd=null&cctvport=null`;
        let cctv_Url = `https://www.utic.go.kr/view/map/cctvStream.jsp?&cctvid=${List[i].cctvid}&cctvName=${encodeURIComponent(List[i].cctvname)}&kind=${kind}&cctvip=${cctvip}&cctvch=${cctvch}&id=null&cctvpasswd=null&cctvport=null`;
        kakao.maps.event.addListener(newMarker, 'click', function () {
          let width = 320;
          let height = 300;
          let left = (window.screen.width / 2) - (320 - 2);
          let top = (window.screen.height / 2) - (300 - 2)
          const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
          window.open(cctv_Url, "_blank", windowFeatures); // 새창에서 열림
        });

        markerArr.push(newMarker);
      }

      /* 기존 마커 삭제 후 새로운 마커 찍기 */
      setMarkers(markers => {
        markers.forEach(marker => marker.setMap(null));
        return markerArr;
      })
    } else { //지도 줌레벨이 11~14 일 때는 마커 찍지 않음
      setMarkers(markers => {
        markers.forEach(marker => marker.setMap(null));
        return [];
      })
    }
  }
  useEffect(() => {
    const container = document.getElementById('map');

    // 대체좌표 (제주시청)
    const defaultCoords = new kakao.maps.LatLng(33.450701, 126.570667);
    const options = {
      center: defaultCoords, // 초기 좌표
      level: 7 // Map zoom level
    };
    const kakaoMap = new kakao.maps.Map(container, options); // 지도 생성

    var bounds = kakaoMap.getBounds(); // 지도 영역정보를 얻어옵니다
    // console.log(bounds);
    var swLatlng = bounds.getSouthWest(); // 영역정보의 남서쪽 정보를 얻어옵니다

    //영역정보의 남서쪽 정보를 얻어옵니다
    var swLatlng = bounds.getSouthWest();
    setSwLatLng({
      xOne: swLatlng.Ma, //남서쪽 위도
      yOne: swLatlng.La, //남서쪽 경도
    });
    //영역정보의 북동쪽 정보를 얻어옵니다 
    var neLatlng = bounds.getNorthEast();
    setNeLatLng({
      xTwo: neLatlng.Ma, //북동쪽 위도
      yTwo: neLatlng.La, //북동쪽 경도
    });

    var zoomControl = new kakao.maps.ZoomControl(); // 줌 컨트롤 생성
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    // 마우스 드래그로 지도 이동이 완료되었을 때 남서쪽과 북동쪽 위도/경도를 새로 설정합니다.
    kakao.maps.event.addListener(kakaoMap, 'dragend', function () {
      //지도 영역정보를 얻어옵니다 
      var bounds = kakaoMap.getBounds();
      //영역정보의 남서쪽 정보를 얻어옵니다 
      var swLatlng = bounds.getSouthWest();
      setSwLatLng({
        xOne: swLatlng.Ma, //남서쪽 위도
        yOne: swLatlng.La, //남서쪽 경도
      });

      // console.log(swLatlng.Ma, swLatlng.La);
      //영역정보의 북동쪽 정보를 얻어옵니다 
      var neLatlng = bounds.getNorthEast();
      setNeLatLng({
        xTwo: neLatlng.Ma, //북동쪽 위도
        yTwo: neLatlng.La, //북동쪽 경도
      });
    });

    // 지도가 확대 또는 축소되면 줌레벨, 남서쪽과 북동쪽 위도/경도를 새로 설정합니다.
    kakao.maps.event.addListener(kakaoMap, 'zoom_changed', function () {
      //지도 영역정보를 얻어옵니다 
      var bounds = kakaoMap.getBounds();
      //영역정보의 남서쪽 정보를 얻어옵니다 
      var swLatlng = bounds.getSouthWest();
      setSwLatLng({
        xOne: swLatlng.Ma, //남서쪽 위도
        yOne: swLatlng.La, //남서쪽 경도
      });
      // console.log(swLatlng.Ma, swLatlng.La);
      //영역정보의 북동쪽 정보를 얻어옵니다 
      var neLatlng = bounds.getNorthEast();
      setNeLatLng({
        xTwo: neLatlng.Ma, //북동쪽 위도
        yTwo: neLatlng.La, //북동쪽 경도
      });

      //줌레벨을 설정합니다.
      setZoomLevel(kakaoMap.getLevel());
    });
    setMap(kakaoMap);
  }, []);

  /**현재 위도, 경도에 따라 지도의 중심좌표, 남서쪽, 북동쪽 좌표 변경*/
  useEffect(() => {
    if (map) { //kakaoMap이 렌더링되면 실행합니다.
      /* 지도 중심좌표 이동 */
      var moveLatLon = new kakao.maps.LatLng(coord.lat, coord.lng);
      map.setCenter(moveLatLon);

      /* 지도 영역정보 얻어오기 */
      let bounds = map.getBounds();
      let swLatlng = bounds.getSouthWest(); //영역정보의 남서쪽 정보를 얻어옵니다 
      setSwLatLng({
        xOne: swLatlng.Ma, //남서쪽 위도
        yOne: swLatlng.La, //남서쪽 경도
      });
      let neLatlng = bounds.getNorthEast(); //영역정보의 북동쪽 정보를 얻어옵니다 
      setNeLatLng({
        xTwo: neLatlng.Ma, //북동쪽 위도
        yTwo: neLatlng.La, //북동쪽 경도
      });
    }
  }, [coord]);

  //cctvList 값이 변경될 때마다 마커를 추가합니다.
  useEffect(() => {
    addMarker(cctvList);
  }, [cctvList]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    }}>
      <div id="map" style={{ width: '100%', height: '100%' }}>
      </div>
    </div>
  );
}

export default Kakao;
