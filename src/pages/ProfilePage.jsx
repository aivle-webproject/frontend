// src/pages/ProfilePage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";

/*
  📌 나중에 백엔드 연동할 때 쓸 예시 (지금은 주석으로만 남겨둠)

  import { useEffect, useState } from "react";
  import axios from "axios";

  function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem("token");

      axios
        .get("백엔드_프로필_API_URL", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data));
    }, []);

    // 아래 JSX에서는 user?.name, user?.email 이런 식으로 사용할 예정
  }
*/

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <div className="profile-page">
          <header className="profile-header">
            <div>
              <h1 className="profile-title">내 프로필</h1>
              <p className="profile-subtitle">
                나의 독서 정보와 활동을 확인할 수 있어요.
              </p>
            </div>

            <button
              className="profile-settings-btn"
              onClick={() => navigate("/profile/edit")}
            >
              프로필 설정
            </button>
          </header>

          <section className="profile-main">
            <div className="profile-left">
              <div className="profile-card">
                <div className="profile-avatar">
                  <span>Y</span>
                </div>

                <div className="profile-info">
                  <h2 className="profile-name">전용균</h2>
                  <p className="profile-email">example@email.com</p>
                  <p className="profile-date">가입일: 2025-01-01</p>
                </div>
              </div>

              <div className="profile-detail-box">
                <h3>독서 요약</h3>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="summary-value">12</span>
                    <span className="summary-label">읽은 책</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-value">5</span>
                    <span className="summary-label">찜한 책</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-value">3</span>
                    <span className="summary-label">리뷰</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-right">
              <div className="profile-section">
                <h3>최근 읽은 책</h3>
                <p className="empty-text">최근 읽은 책이 없습니다.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
