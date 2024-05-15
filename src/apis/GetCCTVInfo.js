import { useEffect, useState } from 'react';
import axios from 'axios';

/** 특정 범위 내의 CCTV data를 불러옵니다. */
export const GetCCTVInfo = (mapLevel, xOne, xTwo, yOne, yTwo) => {
  const [cctvList, setCctvList] = useState([]);
  const [error, setError] = useState(null);
  // console.log(mapLevel, xOne, xTwo, yOne, yTwo);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cctvs', {
          params: {
            // xOne: xOne,
            // xTwo: xTwo,
            // yOne: yOne,
            // yTwo: yTwo
            mapLevel: mapLevel,
            xOne: yOne,
            xTwo: yTwo,
            yOne: xOne,
            yTwo: xTwo
          }
        });
        // console.log('API response:', response.data); // 응답 데이터 확인용 로그
        setCctvList(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [xOne, xTwo, yOne, yTwo]);

  if (error) {
    return <div>{error}</div>;
  }

  return cctvList;
};
