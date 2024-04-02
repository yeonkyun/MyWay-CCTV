import { useState, useEffect } from 'react';
const { kakao } = window;


function Kakao() {
  const [map, setMap] = useState(null);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도 중심 좌표
      level: 5 //지도 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);
  return (
    <div id="map" style={{
      width: '100%',
      height: '100%'
    }}>
    </div>
  )
}

export default Kakao;