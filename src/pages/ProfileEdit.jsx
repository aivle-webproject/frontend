// src/pages/ProfileEdit.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import "./ProfileEdit.css";

function ProfileEdit() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <div className="settings-page">
          <header className="settings-header">
            <h1>프로필 설정</h1>
            <p>계정 정보 및 활동을 관리할 수 있습니다.</p>
          </header>

          <section className="settings-grid">
            {/* 계정 관리 */}
            <div className="settings-card">
              <h3>계정 관리</h3>

              <button className="setting-btn">
                비밀번호 변경
                {/* TODO: 비밀번호 변경 기능 연결 */}
              </button>

              <button className="setting-btn">
                이메일 변경
                {/* TODO: 이메일 변경 API 연결 */}
              </button>

              <button className="setting-btn">
                닉네임 변경
                {/* TODO: 닉네임 변경 API 연결 */}
              </button>

              <button className="setting-btn">
                프로필 이미지 변경
                {/* TODO: 이미지 업로드 기능 연결 */}
              </button>
            </div>

            {/* 활동 관리 */}
            <div className="settings-card">
              <h3>활동 관리</h3>

              <button className="setting-btn">내가 읽은 책 보기</button>
              <button className="setting-btn">찜한 책 보기</button>
              <button className="setting-btn">작성한 리뷰</button>
              <button className="setting-btn">독서 목표 설정</button>
            </div>

            {/* 위험 영역 */}
            <div className="settings-card danger-zone">
              <h3 className="danger-title">위험 영역</h3>

              <button className="danger-btn">
                계정 삭제
                {/* TODO: DELETE /users/me API 연결 */}
              </button>

              <button className="danger-btn">
                로그아웃
                {/* TODO: localStorage.clear() + 메인으로 이동 */}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfileEdit;
