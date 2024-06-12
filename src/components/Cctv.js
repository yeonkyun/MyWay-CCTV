import React, { useEffect, useRef } from "react";
import styles from "./Cctv.module.css";
import axios from "axios";
import videojs from "video.js";
import "video.js/dist/video-js.css";

function CCTV() {
  const videoRef = useRef(null);
  const playerRef = useRef(null); // 플레이어 참조 추가

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://openapi.its.go.kr:9443/cctvInfo",
          {
            params: {
              apiKey: process.env.REACT_APP_CCTV_API_KEY,
              type: "all",
              cctvType: "1",
              minX: 125.0,
              maxX: 127.0885,
              minY: 36.79,
              maxY: 36.797,
              getType: "json",
            },
          }
        );

        const videoUrl = response.data.response.data.cctvurl;

        if (videoUrl) {
          // 이전에 생성된 플레이어가 있으면 제거
          if (playerRef.current) {
            playerRef.current.dispose();
          }

          // 새로운 플레이어 생성
          playerRef.current = videojs(videoRef.current, {
            controls: false,
            autoplay: true,
            muted: true,
            responsive: true,
            aspectRatio: "16:9",
            sources: [
              {
                src: videoUrl,
                type: "application/x-mpegURL",
              },
            ],
          });
        } else {
          console.error("Video URL not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

    // 컴포넌트가 unmount될 때 플레이어 정리
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className={styles.cctvItem}>
      <video ref={videoRef} className="video-js vjs-default-skin"></video>
    </div>
  );
}

export default CCTV;
