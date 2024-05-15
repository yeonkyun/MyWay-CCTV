const xlsx = require('xlsx');
const mysql = require('mysql');

// 엑셀 파일 읽기
const workbook = xlsx.readFile('C:/Users/hyo_0/OneDrive/문서/GitHub/MyWay-CCTV/server/OpenDataCCTV.xlsx'); // 엑셀 파일 경로를 지정하세요.
const sheet_name_list = workbook.SheetNames;
const worksheet = workbook.Sheets[sheet_name_list[0]];

// 엑셀 데이터를 JSON 형식으로 변환
const data = xlsx.utils.sheet_to_json(worksheet);

console.log('Total rows in Excel:', data.length); // 엑셀 데이터 개수를 출력합니다.

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

  // 데이터베이스에 데이터 삽입
  data.forEach((row, index) => {
    const rn = row['RN']; // 엑셀 열 이름에 따라 변경
    const cctvid = row['CCTVID']; // 엑셀 열 이름에 따라 변경
    const cctvname = row['CCTVNAME']; // 엑셀 열 이름에 따라 변경
    const centername = row['CENTERNAME']; // 엑셀 열 이름에 따라 변경
    const xcoord = row['XCOORD']; // 엑셀 열 이름에 따라 변경
    const ycoord = row['YCOORD']; // 엑셀 열 이름에 따라 변경

    const query = 'INSERT INTO cctv_data (rn, cctvid, cctvname, centername, xcoord, ycoord) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [rn, cctvid, cctvname, centername, xcoord, ycoord], (err, results) => {
      if (err) {
        console.error(`Error inserting row ${index}:`, err); // 삽입 오류가 발생한 행과 오류 메시지를 출력합니다.
      } else {
        console.log('Data inserted:', results.insertId);
      }
    });
  });

  connection.end(() => {
    console.log('Connection to MySQL Database closed.');
  });
});
