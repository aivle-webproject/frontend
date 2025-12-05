import { useState } from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import BookGrid from "./components/BookGrid";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' 또는 'profile'

  return (
    <div className="app">
      <header className="header">
        {/* 로고 클릭하면 홈으로 */}
        <h1 className="logo" onClick={() => setCurrentPage("home")}>
          걷다가 서재
        </h1>

        {/* 프로필 클릭하면 프로필 페이지로 */}
        <div
          className="profile-area"
          onClick={() => setCurrentPage("profile")}
        >
          <div className="profile-icon"></div>
          <span className="profile-name">에이블러 님</span>
        </div>
      </header>

      {currentPage === "home" && (
        <div className="layout">
          <aside className="sidebar">
            <h2 className="sidebar-title">카테고리</h2>
            <CategoryList />
          </aside>

          <main className="content">
            <BookGrid />
          </main>
        </div>
      )}

      {currentPage === "profile" && <ProfilePage />}
    </div>
  );
}

export default App;


