// // import "./SignUp.css";
// import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "../Styles/SignUp.module.css";

// // import API from "../API";

// export default function SignUp() {
//   const navigate = useNavigate(); //Main Page 이동

//   //초기값 세팅 - 아아디(이메일), 패스워드, 패스워드확인, 이름, 전화번호
//   const [Id, setId] = useState("");
//   const [Pwd, setPwd] = useState("");
//   const [Cpwd, setCheckPwd] = useState("");
//   const [Name, setName] = useState("");
//   const [Phone, setPhone] = useState("");

//   const [checkNicknameResult, setcheckNicknameResult] = useState(false);

//   //오류메세지 상태 저장
//   const [idMessage, setIdMessage] = useState("");
//   const [pwdMessage, setPwdMessage] = useState("");
//   const [cpwdMessage, setCheckPwdMessage] = useState("");
//   const [nameMessage, setNameMessage] = useState("");
//   const [phoneMessage, setPhoneMessage] = useState("");

//   const [btnCheckMessage, setbtnCheckMessage] = useState("");

//   //유효성 검사
//   const [isId, setIsId] = useState(false);
//   const [isPwd, setIsPwd] = useState(false);
//   const [isCpwd, setIsCheckPwd] = useState(false);
//   const [isName, setIsName] = useState(false);
//   const [isPhone, setIsPhone] = useState(false);
//   //아이디
//   const onIdHandler = (e) => {
//     setId(e.currentTarget.value);
//     const idRegExp =
//       /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
//     if (!idRegExp.test(Id)) {
//       setIdMessage("이메일의 형식이 올바르지 않습니다!");
//     } else {
//       setIdMessage("ID 중복체크를 부탁드립니다");
//     }
//   };

//   //아이디 중복체크 버튼
//   const idCheckBtnHandler = async (e) => {
//     e.preventDefault();
//     const checkId = {
//       checkid: Id,
//     };
//     const response = await API.post("/api/checkid", checkId);
//     if (response.data === true) {
//       setIdMessage("사용가능한 ID 입니다");
//       setIsId(true);
//     } else {
//       setIdMessage("ID 중복입니다");
//       setIsId(false);
//     }
//   };

//   //패스워드
//   const onPwdHandler = (e) => {
//     setPwd(e.currentTarget.value);
//     const passwordRegExp =
//       /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
//     if (!passwordRegExp.test(e.currentTarget.value)) {
//       setPwdMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
//       setIsPwd(false);
//     } else {
//       setPwdMessage("안전한 비밀번호 입니다.");
//       setIsPwd(true);
//     }
//   };

//   //패스워드 체크
//   const oncheckPwdHandler = (e) => {
//     const currentPasswordConfirm = e.currentTarget.value;
//     setCheckPwd(e.currentTarget.value);
//     if (Pwd !== currentPasswordConfirm) {
//       setCheckPwdMessage("비밀번호가 다릅니다!");
//       setIsCheckPwd(false);
//     } else {
//       setCheckPwdMessage("비밀번호를 확인했습니다.");
//       setIsCheckPwd(true);
//     }
//   };

//   //이름
//   const onNameHandler = (e) => {
//     setName(e.currentTarget.value);

//     if (Name == null) {
//       setNameMessage("이름을 입력해주세요");
//       setIsName(false);
//     } else {
//       setNameMessage("이름을 확인했습니다");
//       setIsName(true);
//     }
//   };

//   //휴대폰 번호
//   const onPhoneHandler = (e) => {
//     setPhone(e.currentTarget.value);
//     const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
//     if (!phoneRegExp.test(e.currentTarget.value)) {
//       setPhoneMessage("올바른 형식이 아닙니다!");
//     } else {
//       setPhoneMessage("휴대폰번호 중복체크를 부탁드립니다");
//     }
//   };

//   //휴대폰 중복체크 버튼
//   const phoneBtnHandler = async (e) => {
//     e.preventDefault();
//     const phone = {
//       phone: Phone,
//     };
//     const response = await API.post("/api/checkPhone", phone);
//     if (response.data === true) {
//       setPhoneMessage("사용가능한 번호 입니다");
//       setIsPhone(true);
//     } else {
//       setPhoneMessage("이미 가입된 번호입니다");
//       setIsPhone(false);
//     }
//   };

//   //submit
//   const onSubminHandler = (e) => {
//     e.preventDefault();

//     // isId, isPwd, isCpwd, isName, isPhone, isNickname
//     if (isId === true) {
//       if (isPwd === true) {
//         if (isCpwd === true) {
//           if (isName === true) {
//             if (isPhone === true) {
//               const user = {
//                 id: Id,
//                 pwd: Pwd,
//                 name: Name,
//                 phone: Phone,
//               };

//               navigate(`/login`); //Main Page 이동
//             } else {
//               setbtnCheckMessage("휴대폰번호를 확인해주세요");
//             }
//           } else {
//             setbtnCheckMessage("이름을 확인해주세요");
//           }
//         } else {
//           setbtnCheckMessage("비밀번호 확인을 확인해주세요");
//         }
//       } else {
//         setbtnCheckMessage("비밀번호를 확인해주세요");
//       }
//     } else {
//       setbtnCheckMessage("아이디(메일)를 확인해주세요");
//     }
//   };
//   return (
//     <div>
//       <center>
//         <Link to="/회원가입">
//           <h1>회원가입</h1>
//         </Link>
//         <hr></hr>
//         <form onSubmit={onSubminHandler}>
//           <div className="signDegin">
//             <h6>아이디(이메일)</h6>
//             <input type={"email"} onChange={onIdHandler}></input>
//             <button
//               type="button"
//               className="checkbtn"
//               onClick={idCheckBtnHandler}
//             >
//               ID 중복체크
//             </button>
//           </div>
//           <p className="meessage">{idMessage}</p>
//           <div className="signDegin">
//             <h6>비밀번호</h6>
//             <input type={"password"} onChange={onPwdHandler}></input>
//           </div>
//           <p className="meessage">{pwdMessage}</p>
//           <div className="signDegin">
//             <h6>비밀번호확인</h6>
//             <input type={"password"} onChange={oncheckPwdHandler}></input>
//           </div>
//           <p className="meessage">{cpwdMessage}</p>

//           <div className="signDegin">
//             <h6>이름</h6>
//             <input type={"text"} onChange={onNameHandler}></input>
//           </div>
//           <p className="meessage">{nameMessage}</p>
//           <div className="signDegin">
//             <h6>휴대폰번호</h6>
//             <input type={"text"} onChange={onPhoneHandler}></input>
//             <button
//               type="button"
//               className="checkbtn"
//               onClick={phoneBtnHandler}
//             >
//               휴대폰번호 중복체크
//             </button>
//           </div>
//           <p className="meessage">{phoneMessage}</p>
//           <div className="signDegin"></div>
//           <hr></hr>
//           <button type="submit">회원가입</button>
//         </form>
//         <p className="meessage">{btnCheckMessage}</p>
//       </center>
//     </div>
//   );
// }

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 추가합니다.
    console.log(form);
  };

  return (
    <div>
      <div>
        <h3 id="signup_title"> 회원가입 (Signup) </h3>
      </div>
      <div className="Signup">
        <div>
          {/* 아이디 */}
          <div>
            <h5> 아이디 </h5>
            <input type="text" maxLength="20" name="signup_id" />
          </div>

          {/* 비밀번호 */}
          <div>
            <h5> 비밀번호 </h5>
            <input type="password" maxLength="15" name="signup_password" />
          </div>

          {/* 비밀번호 */}
          <div>
            <h5> 비밀번호 확인 </h5>
            <input type="password" maxLength="15" name="signup_pswCheck" />
          </div>
        </div>

        <div id="signup_section">
          {/* 이름 */}
          <div>
            <h5> 이름 </h5>
            <input type="text" maxLength="10" name="signup_name" />
          </div>

          {/* 생년월일 */}
          <div>
            <h5> 생년월일 </h5>
            <input type="text" maxLength="6" name="signup_birthday" /> -
            <input type="text" maxLength="1" name="signup_sex" /> ******
          </div>

          {/* 이메일*/}
          <div>
            <h5> 이메일 </h5>
            <input type="text" maxLength="15" name="signup_email" /> @
            <select name="signup_email_select">
              <option value="gmail.com"> gmail.com </option>
              <option value="naver.com"> naver.com </option>
              <option value="sunmoon.ac.kr"> sunmoon.ac.kr </option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <input type="button" value="가입하기" name="sigunup_submit" />
      </div>
    </div>
  );
}
//     <form onSubmit={handleSubmit}>
//       <div>
//         <h1 className={styles.Z3r0F1ag}>Z3r0F1ag</h1>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>birthday:</label>
//         <input
//           type="DataTypes.DATE"
//           name="birthday"
//           value={form.birthday}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Phone:</label>
//         <input
//           type="text"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

export default SignUp;
