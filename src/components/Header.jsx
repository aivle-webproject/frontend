// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goBookRegister = () => navigate("/book-register");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");
  const goProfile = () => navigate("/profile");

  return (
    <header className="header">
      <div className="header-left" onClick={goHome}>
        <h1 className="logo">걷다가 서재</h1>
      </div>

      <div className="header-right">
        <button className="header-btn" onClick={goBookRegister}>
          도서 등록
        </button>

        {/* TODO: 나중에 로그인 여부에 따라 프로필 버튼 노출 제어 */}
        <button className="header-btn" onClick={goProfile}>
          프로필
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