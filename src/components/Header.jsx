// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const goHome = () => navigate("/");
  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");
  const goBookRegister = () => navigate("/book-register");
  const handleLogout = () => {
    logout();
    goHome();
  };

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
        <button className="add-book-btn" onClick={goBookRegister}>
          도서 등록
        </button>

        {user ? (
          <>
            <div className="profile-info">
              <div className="profile-icon">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="profile-name">{user.name || user.id}</div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button className="header-btn login-btn" onClick={goLogin}>
              로그인
            </button>
            <button className="header-btn signup-btn" onClick={goSignup}>
              회원가입
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
