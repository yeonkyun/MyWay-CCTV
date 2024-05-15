const express = require('express');
const cors = require('cors');
const connection = require('./db'); // db.js 파일을 불러옵니다.

const app = express();
app.use(cors());
app.use(express.json());

// 특정 범위 내의 CCTV 데이터를 가져오는 API 엔드포인트
app.get('/api/cctvs', (req, res) => {
  const { mapLevel, xOne, xTwo, yOne, yTwo } = req.query;
  console.log('Received params:', { mapLevel, xOne, xTwo, yOne, yTwo }); // 파라미터 확인용 로그

  if (parseInt(mapLevel) <= 7) {
    const query = `
      SELECT * FROM cctv_data 
      WHERE xcoord BETWEEN ? AND ? 
      AND ycoord BETWEEN ? AND ?;
    `;

    // console.log('Executing query:', query); // 쿼리 확인용 로그
    // console.log('With parameters:', [xOne, xTwo, yOne, yTwo]); // 파라미터 로그

    connection.query(query, [xOne, xTwo, yOne, yTwo], (err, results) => {
      if (err) {
        console.error('Query error:', err); // 쿼리 에러 로그
        res.status(500).send('Server error');
        return;
      }
      console.log('Query results:', results); // 쿼리 결과 확인용 로그
      res.json(results);
    });
  } else {
    res.json([]); // mapLevel이 7보다 큰 경우 빈 배열 반환
  }
});

// 서버 시작
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
