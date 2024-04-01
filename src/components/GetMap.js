import { Map } from "react-kakao-maps-sdk";

const GetMap = () => {
  return (
    <div>
      <Map
        center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        style={{
          width: '600px',
          height: '500px',
          borderRadius: '20px',
        }}
      >
      </Map>
    </div>
  );
};

export default GetMap;