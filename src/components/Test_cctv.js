import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import videojs from 'video.js';
import "video.js/dist/video-js.css";
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
        const videoUrl = response.data.response.data.cctvurl; // CCTV URL 받기
        console.log(videoUrl);
        var videoElement = document.getElementById("video-source");
        videoElement.src = videoUrl;
        var player = videojs('cctv-video');

        player.ready(function () {
          // 초기 볼륨 설정
          player.volume();

          // 볼륨 조절 이벤트 리스너 등록
          player.on('volumechange', function () {
            console.log('볼륨 조절됨: ' + player.volume());
          });
        });

        videojs.options.autoplay = true;
        player.volume(0);
        player.play();


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }


    fetchData();
  }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 호출되도록 설정합니다.

  return (
    <video id="cctv-video" class="video-js vjs-default-skin" controls>
      <source id="video-source" src="" type="application/x-mpegURL" />
    </video>
  );
}

export default Test_cctv;