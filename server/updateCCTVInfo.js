const axios = require('axios');
const mysql = require('mysql');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tj64669801*',
  database: 'mytest'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database.');
});

// CCTV 정보를 업데이트하는 함수
async function updateCCTVInfo() {
  // 모든 cctvid를 데이터베이스에서 가져옴
  connection.query('SELECT cctvid FROM cctv_data', async (err, results) => {
    if (err) throw err;

    for (let row of results) {
      const cctvid = row.cctvid;
      try {
        const response = await axios.get(`http://www.utic.go.kr/map/getCctvInfoById.do?cctvId=${cctvid}`);
        const { CH, CCTVIP, KIND } = response.data;

        // 데이터베이스 업데이트
        connection.query(
          'UPDATE cctv_data SET cctvch = ?, cctvip = ?, kind = ? WHERE cctvid = ?',
          [CH, CCTVIP, KIND, cctvid],
          (err, result) => {
            if (err) {
              console.error(`Failed to update CCTV info for ID ${cctvid}`, err);
            } else {
              console.log(`Updated CCTV info for ID ${cctvid}`);
            }
          }
        );
      } catch (error) {
        console.error(`Failed to get CCTV info for ID ${cctvid}`, error);
      }
    }
  });
}

// 스크립트 실행
updateCCTVInfo().then(() => {
  console.log('CCTV info update complete.');
  connection.end();
});
