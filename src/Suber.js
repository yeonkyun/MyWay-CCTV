const express = require("express");
const app = express();
const port = 3001; // 서버가 실행될 포트 번호를 설정합니다. 다른 포트 번호를 사용하고 싶다면 변경하세요.
const cors = require("cors"); // CORS(Cross-Origin Resource Sharing)를 활성화합니다.
const bodyParser = require("body-parser"); // 요청 바디(body)의 데이터를 파싱하기 위한 미들웨어입니다.
const mysql = require("mysql"); // MySQL 데이터베이스와의 연결을 담당하는 모듈입니다.

// MySQL 데이터베이스 연결 정보를 설정합니다.
var connection = mysql.createConnection({
  host: "localhost", // MySQL 호스트 주소를 설정합니다.
  user: "root", // MySQL 사용자 이름을 설정합니다.
  password: "root", // MySQL 비밀번호를 설정합니다.
  database: "SignUpDB", // 사용할 데이터베이스 이름을 설정합니다. (테이블이 생성되어 있어야 합니다.)
});

// MySQL 데이터베이스에 연결합니다.
connection.connect();

// Express 애플리케이션에 미들웨어를 추가합니다.
app.use(bodyParser.urlencoded({ extended: false })); // URL 인코딩된 요청 바디를 파싱합니다.
app.use(cors()); // CORS를 활성화합니다.
app.use(bodyParser.json()); // JSON 형식의 요청 바디를 파싱합니다.

// 루트 엔드포인트에 GET 요청이 오면 "Hello World!"를 응답합니다.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// '/text' 엔드포인트에 POST 요청이 오면 요청 바디의 inText 값을 데이터베이스에 저장합니다.
app.post("/text", (req, res) => {
  const user_id = req.body.inText; // 요청 바디에서 inText 값을 가져옵니다.
  console.log(user_id); // 서버 콘솔에 inText 값을 출력합니다.

  // 데이터베이스에 INSERT 쿼리를 실행하여 데이터를 삽입합니다.
  connection.query(
    "INSERT INTO new_table (user_id) VALUES (?)",
    [user_id],
    function (err, rows, fields) {
      if (err) {
        console.log("DB 저장 실패"); // 오류가 발생하면 서버 콘솔에 실패 메시지를 출력합니다.
        res.status(500).send("DB 저장 실패"); // 클라이언트에게 500 상태 코드와 실패 메시지를 응답합니다.
      } else {
        console.log("DB 저장 성공"); // 데이터베이스에 데이터가 성공적으로 저장되면 서버 콘솔에 성공 메시지를 출력합니다.
        res.status(200).send("DB 저장 성공"); // 클라이언트에게 200 상태 코드와 성공 메시지를 응답합니다.
      }
    }
  );
});

// Express 애플리케이션을 지정된 포트에서 실행합니다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); // 서버가 실행되면 서버 주소와 포트를 서버 콘솔에 출력합니다.
});
