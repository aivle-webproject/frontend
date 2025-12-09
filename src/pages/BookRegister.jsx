import "./BookRegister.css";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function BookRegister() {
    const navigate = useNavigate();
    const { user } = useAuth(); // ✅ 로그인 유저

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("로맨스");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (!user) {
            alert("로그인이 필요합니다.");
            navigate("/login");
        }
    }, [user, navigate]);

    // ✅ 아직 user를 못 받았을 땐 렌더링 중단
    if (!user) return null;

    // ✅ 등록 버튼
    const handleSubmit = async () => {
        try {
            await axios.post(
                `http://localhost:8080/api/books/${user.id}`,
                {
                    title,
                    content,
                    category,
                }
            );

            navigate("/");
        } catch (e) {
            console.error(e);
            alert("도서 등록 실패");
        }
    };

    return (
        <div className="book-register">
            <h2 className="page-title">도서 등록</h2>

            <div className="form-group">
                <label>1. 작품의 제목을 입력해주세요. (최대 50자)</label>
                <input
                    type="text"
                    value={title}
                    maxLength={50}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="count">{title.length}/50</div>
            </div>

            <div className="form-group">
                <label>2. 작품에 대한 소개를 입력해주세요. (최대 300자)</label>
                <textarea
                    value={content}
                    maxLength={300}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="count">{content.length}/300</div>
            </div>

            <div className="form-group">
                <label>카테고리</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="로맨스">로맨스</option>
                    <option value="SF">SF</option>
                    <option value="공포">공포</option>
                    <option value="추리">추리</option>
                    <option value="역사">역사</option>
                    <option value="시">시</option>
                </select>
            </div>


            <div className="actions">
                <button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? "등록 중..." : "등록"}
                </button>

                <button
                    className="cancel-btn"
                    onClick={() => navigate("/")}
                >
                    취소
                </button>
            </div>
        </div>
    );
}

export default BookRegister;
