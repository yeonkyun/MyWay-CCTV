import React, { useState, useEffect, useRef } from 'react';
import styles from './Cctv.module.css';
import axios from 'axios'; // axios 라이브러리
import videojs from 'video.js'; // 비디오 플레이어 라이브러리
import "video.js/dist/video-js.css"; // 비디오 플레이어 스타일시트

function CCTV() {
  const videoRef = useRef(null); // 비디오 요소 참조

  useEffect(() => {
    async function fetchData() { //API 요청
      try {
        const response = await axios.get('https://openapi.its.go.kr:9443/cctvInfo', {
          params: {
            apiKey: process.env.REACT_APP_CCTV_API_KEY,
            type: 'all',
            cctvType: '1',
            minX: 125.000000,
            maxX: 127.088500,
            minY: 36.790000,
            maxY: 36.797000,
            getType: 'json'
          }
        });
        const videoUrl = response.data.response.data.cctvurl; // CCTV URL
        // console.log(response) // API 요청 결과 확인
        if (videoUrl) {
          const player = videojs(videoRef.current, { // 비디오 플레이어 생성
            controls: false, // 컨트롤러 숨김
            autoplay: true, // 자동 재생
            muted: true, // 음소거 (안할시 구글정책 위반으로 인한 오류 발생 가능성 있음)
            // fluid: true, // 비디오 크기 자동 조절
            responsive: true, // 반응형 활성화. But 아직 미구현
            aspectRatio: '9:6',
            sources: [{
              src: videoUrl,
              type: 'application/x-mpegURL' // 비디오 타입 (HLS)
            }]
          });
        } else {
          console.error('Video URL not found'); // CCTV URL이 없을 경우
        }
      } catch (error) {
        console.error('Error fetching data:', error); // API 요청 실패
      }
    }
    fetchData(); // API 요청 함수 실행
  }, []);

  return (
    <div className={styles.cctv}>
      <video ref={videoRef} className="video-js vjs-default-skin"></video>
    </div>
  );
}

export default CCTV;