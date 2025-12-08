// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");
  const goBookRegister = () => navigate("/book-register");

  return (
    <header className="header">
      {/* 왼쪽 로고 */}
      <div
        className="logo-area"
        onClick={goHome}
        style={{ cursor: "pointer" }}
      >
        <h1 className="logo-text">걷다가 서재</h1>
      </div>

      {/* 오른쪽 버튼들 */}
      <div className="profile-area">
        {/* 필요 없으면 도서 등록 버튼은 지워도 됨 */}
        <button className="add-book-btn" onClick={goBookRegister}>
          도서 등록
        </button>

        <button className="header-btn login-btn" onClick={goLogin}>
          로그인
        </button>
        <button className="header-btn signup-btn" onClick={goSignup}>
          회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;
