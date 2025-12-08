import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BookRegister from "./pages/BookRegister";


function App() {
    // ✅ 전역 로그인 상태 (관제탑)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-register" element={<BookRegister />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
