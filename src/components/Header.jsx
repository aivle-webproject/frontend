import { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import "./Header.css";
import { useNavigate } from "react-router-dom";


function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();


    // ✅ 로그인 성공 처리
    const handleLoginSuccess = (name) => {
        setUserName(name);
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    };

    // ✅ 로그아웃 처리
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("");
    };

    return (
        <>
            <header className="header">
                <h2 className="logo">걷다가 서재</h2>

                <div className="profile-area">
                    {isLoggedIn ? (
                        <>
                            {/* ✅ 이름 */}
                            <span className="profile-name">{userName} 님</span>

                            {/* ✅ 로그아웃 */}
                            <button className="logout-btn" onClick={handleLogout}>
                                로그아웃
                            </button>

                            {/* ✅ 도서 등록 */}
                            <button
                                className="add-book-btn"
                                onClick={() => navigate("/book-register")}
                            >
                                + 도서 등록
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="login-btn"
                                onClick={() => setIsLoginOpen(true)}
                            >
                                로그인
                            </button>
                            <button
                                className="signup-btn"
                                onClick={() => setIsSignupOpen(true)}
                            >
                                회원가입
                            </button>
                        </>
                    )}
                </div>
            </header>

            {isLoginOpen && (
                <LoginModal
                    onClose={() => setIsLoginOpen(false)}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}

            {isSignupOpen && (
                <SignupModal onClose={() => setIsSignupOpen(false)} />
            )}
        </>
    );
}

export default Header;
