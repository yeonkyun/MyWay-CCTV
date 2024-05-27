import React, { useState } from "react";
import styles from "../Styles/Notice.module.css";

function Notice() {
  // 공지사항 목록 데이터
  const notices = [
    {
      id: 1,
      content: "CCTV 즐겨찾기는 어떻게 하나요?",
      detail:
        'CCTV 즐겨찾기는 앱 메뉴에서 "즐겨찾기"를 선택한 후 원하는 CCTV를 추가할 수 있습니다.',
    },
    {
      id: 2,
      content: "경로검색은 어떻게 하나요?",
      detail:
        '경로검색은 앱 화면에서 "경로검색"을 선택하고 출발지와 도착지를 입력한 후 경로를 검색할 수 있습니다.',
    },
    {
      id: 3,
      content: "로그인은 어떻게 하나요?",
      detail:
        "로그인은 앱 화면의 로그인 창에서 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭하면 됩니다.",
    },
    {
      id: 4,
      content: "회원가입은 어떻게 하나요?",
      detail:
        "회원가입은 앱 화면의 회원가입 창에서 필요한 정보를 입력한 후 가입 버튼을 클릭하면 됩니다.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotices, setFilteredNotices] = useState(notices);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // 검색어 입력 시 필터링 함수
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredNotices = notices.filter((notice) =>
      notice.content.includes(searchTerm)
    );
    setFilteredNotices(filteredNotices);
  };

  // 공지사항 클릭 시 상세 내용 보기/닫기
  const handleNoticeClick = (notice) => {
    setSelectedNotice((prevSelectedNotice) => {
      if (prevSelectedNotice && prevSelectedNotice.id === notice.id) {
        return null; // 이미 선택된 공지사항을 다시 클릭하면 선택 해제
      } else {
        return notice; // 새로운 공지사항을 클릭하면 선택
      }
    });
  };

  return (
    <div className={styles.Notice}>
      <h2 className={styles.title}>공지사항</h2>
      <input
        type="text"
        placeholder="질문을 입력하세요."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.SearchInput}
      />
      <ul>
        {filteredNotices.map((notice, index) => (
          <li key={notice.id}>
            <div
              onClick={() => handleNoticeClick(notice)}
              className={styles.NoticeContent}
            >
              {notice.content}
            </div>
            {selectedNotice && selectedNotice.id === notice.id && (
              <div className={styles.SelectedNotice}>
                <p>{notice.detail}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;
