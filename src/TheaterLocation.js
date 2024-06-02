import { Map, MapMarker } from "react-kakao-maps-sdk";

const TheaterLocation = () => {
  return (
    <div>
      <Map
        center={{ lat: 36.79795, lng: 127.0746 }}
        style={{
          width: "600px",
          height: "500px",
          borderRadius: "20px",
        }}
      >
        //지도에 보여줄 위치 지정 (위도,경도)
        <MapMarker
          style={{ border: "tranparent" }}
          position={{ lat: 36.79795, lng: 127.0746 }}
        >
          //핀 찍힐 위치 36.79795, 127.0746
          <div
            style={{
              color: "#9971ff",
              fontSize: "19px",
              fontWeight: "700",
              border: "4px solid #9971ff",
              borderRadius: "10px",
              padding: "2.5px",
            }}
          >
            🎬 small box 🎬
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  );
};

export default TheaterLocation;
