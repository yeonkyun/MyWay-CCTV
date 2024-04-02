import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import videojs from 'video.js';
function Test_cctv() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://openapi.its.go.kr:9443/cctvInfo', {
          params: {
            apiKey: '758229b3bf2d46a68304a0077200adce',
            type: 'all',
            cctvType: '1',
            minX: 125.000000,
            maxX: 127.088500,
            minY: 36.790000,
            maxY: 36.797000,
            getType: 'json'
          }
        });
        console.log(response.data);
        const videoUrl = response.data.response.data.cctvurl;
        console.log(videoUrl);



      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchData();
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 호출되도록 설정합니다.

  return (
    <></>
  );
}

export default Test_cctv;