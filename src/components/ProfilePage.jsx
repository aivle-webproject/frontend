// src/components/ProfilePage.jsx
import React, { useState } from "react";

function ProfilePage() {
  // 왼쪽 메뉴 탭 상태: 'activity' 또는 'security'
  const [activeTab, setActiveTab] = useState("security");
  const [password, setPassword] = useState(""); // 🔥 비밀번호 입력값 상태

  return (
    <div className="profile-page">
      <div className="profile-layout">
        {/* 왼쪽 프로필 카드 + 메뉴 */}
        <aside className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-photo-large">
              {/* 여기 나중에 진짜 프로필 이미지 넣을 수 있어 */}
            </div>
            <div className="profile-text-line">aivler.name</div>
            <div className="profile-text-line">aivler.gender</div>
            <div className="profile-text-line">aivler.age</div>
          </div>

          <nav className="profile-menu">
            <button
              className={
                "profile-menu-item" +
                (activeTab === "activity" ? " active" : "")
              }
              onClick={() => setActiveTab("activity")}
            >
              activity
            </button>

            <button
              className={
                "profile-menu-item" +
                (activeTab === "security" ? " active" : "")
              }
              onClick={() => setActiveTab("security")}
            >
              security
            </button>
          </nav>
        </aside>

        {/* 오른쪽 설정 / 활동 영역 */}
        <main className="profile-content">
          {/* security 탭일 때 */}
          {activeTab === "security" && (
            <>
              {/* 비밀번호 변경 섹션 */}
              <section className="profile-section">
                <h2 className="section-title">비밀번호 변경</h2>

                <div className="section-row">
                  <label className="section-label" htmlFor="password">
                    비밀번호
                  </label>
                  <input
                  id="password"
                  type="password"
                  className="section-input"
                  placeholder="새 비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* 비밀번호 변경 버튼 */}
                  <button
                  className="btn btn-primary"
                  onClick={() => {if (!password) {alert("새 비밀번호를 입력해주세요.");
                    return;
    }

    // 아주 간단한 예시: 8자 미만이면 경고
    if (password.length < 8) {
      alert("비밀번호는 8자 이상으로 설정하는 것을 추천합니다.");
      return;
    }

    alert("비밀번호 변경 요청을 보냈다고 가정! 👍");
  }}
>
  변경
</button>

                </div>
              </section>

              {/* 계정 삭제 섹션 */}
              <section className="profile-section profile-section-danger">
                <h2 className="section-title danger">계정 삭제</h2>

                <div className="section-row between">
                  <p className="section-desc">계정이 영구 삭제됩니다.</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const ok = confirm("정말 계정을 삭제하시겠습니까?");
                      if (ok) {
                        alert("계정 삭제 요청을 보냈다고 가정!");
                      }
                    }}
                  >
                    계정 삭제
                  </button>
                </div>
              </section>
            </>
          )}

          {/* activity 탭일 때 */}
          {activeTab === "activity" && (
            <section className="profile-section">
              <h2 className="section-title">활동 내역</h2>

              <ul className="activity-list">
                <li className="activity-item">
                  <span className="activity-date">2025-12-01</span>
                  <span className="activity-text">
                    『노인과 바다』를 완독했어요.
                  </span>
                </li>
                <li className="activity-item">
                  <span className="activity-date">2025-11-28</span>
                  <span className="activity-text">
                    『서유기』를 서재에 추가했어요.
                  </span>
                </li>
                <li className="activity-item">
                  <span className="activity-date">2025-11-20</span>
                  <span className="activity-text">
                    『반지의 제왕』을 관심 목록에 담았어요.
                  </span>
                </li>
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
