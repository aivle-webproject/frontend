// src/pages/ProfilePage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <div className="profile-page">
          {/* 상단 헤더 - 왼쪽 상단 고정 */}
          <header className="profile-header">
            <h1 className="profile-title">내 프로필</h1>
            <p className="profile-subtitle">
              나의 독서 정보와 계정 상태를 확인하세요.
            </p>
          </header>

          {/* 카드들을 세로로 한 줄 정렬 */}
          <section className="profile-column">
            {/* 1. 프로필 카드 */}
            <div className="profile-card">
              <div className="profile-avatar">
                <span>Y</span>
              </div>

              <div className="profile-info">
                <h2 className="profile-name">임주혁</h2>
                {/* 이메일은 프로필 카드에서 제거 */}
                <p className="profile-date">가입일: 2025-01-01</p>
              </div>
            </div>

            {/* 2. 독서 요약 카드 */}
            <div className="profile-detail-box">
              <h3 className="detail-title">독서 요약</h3>

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

            {/* 3. 계정 설정 카드 */}
            <div className="account-card">
              <h3 className="account-title">계정 설정</h3>
              <p className="account-desc">
                닉네임과 비밀번호를 변경하거나, 계정을 삭제할 수 있습니다.
              </p>

              <div className="account-buttons">
                <button className="setting-btn">
                  <span className="btn-icon">📝</span>
                  <span>닉네임 변경</span>
                </button>

                <button className="setting-btn">
                  <span className="btn-icon">🔒</span>
                  <span>비밀번호 변경</span>
                </button>
              </div>

              <div className="danger-group">
                <button className="danger-btn">
                  <span className="btn-icon">🗑</span>
                  <span>계정 삭제</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
