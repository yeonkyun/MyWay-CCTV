import React, { useEffect } from "react";
import axios from "axios";

function MapComponent() {
  const getCCTV = async (minY, minX, maxY, maxX, zoom) => {
    if (zoom >= 10) {
      const url = `http://api.vworld.kr/req/data?service=data&version=2.0&request=getfeature&key=483E0418-2F46-3223-80A1-F66D16A24685&format=json&errorformat=json&size=100&page=1&data=LT_P_UTISCCTV&geomfilter=BOX(${minY}%2C${minX}%2C${maxY}%2C${maxX})&columns=locate%2Ccctvname%2Cag_geom&geometry=true&attribute=true&crs=epsg%3A4326&domain=api.vworld.kr`;
      try {
        const response = await axios.get(url);
        setCCTV(response.data);
      } catch (error) {
        console.error("Error fetching CCTV data:", error);
      }
    } else {
      // Clear CCTV data or perform any other action
    }
  };

  const getDragEndBounds = (msg, zoom) => {
    const bounds = msg.toString().replace("(", "").replace(")", "").split(",");
    const minY = bounds[0].split(":")[1].trim();
    const minX = bounds[1].split(":")[1].trim();
    const maxY = bounds[2].split(":")[1].trim();
    const maxX = bounds[3].split(":")[1].trim();
    getCCTV(minY, minX, maxY, maxX, parseInt(zoom));
  };

  useEffect(() => {
    // Example of calling getDragEndBounds when zoom and bounds change
    const zoom = 10; // Assuming zoom level
    const bounds = {
      minY: 37.1234,
      minX: 127.5678,
      maxY: 37.5678,
      maxX: 127.9876,
    }; // Example bounds
    getDragEndBounds(bounds, zoom);
  }, []); // Ensure this useEffect runs only once on component mount

  return (
    // Render your map component here
    <div>{/* Your map component */}</div>
  );
}

export default MapComponent;
