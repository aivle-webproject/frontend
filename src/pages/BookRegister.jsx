import "./BookRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateBookCover } from "../api/openai";


function BookRegister() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("로맨스");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        if (!title || !description) {
            alert("제목과 소개를 모두 입력해주세요.");
            return;
        }

        setIsLoading(true);
        try {
            const coverImageUrl = await generateBookCover({ title, description, category });
            console.log("Generated Cover:", coverImageUrl);
            alert("표지가 생성되었습니다! (콘솔 확인)");
            // 여기서 실제 등록 로직을 수행하거나 navigate를 할 수 있습니다.
            // navigate("/"); 
        } catch (error) {
            console.error(error);
            alert("표지 생성 실패: " + error.message);
        } finally {
            setIsLoading(false);
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
                    maxLength={49}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="count">{title.length}/50</div>
            </div>

            {/* 2. 소개 */}
            <div className="form-group">
                <label>2. 작품에 대한 소개를 입력해주세요. (최대 300자)</label>

                <textarea
                    value={description}
                    maxLength={299}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="count">{description.length}/300</div>
            </div>

            <div className="form-group">
                <label>3. 작품의 카테고리를 선택해주세요.</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>로맨스</option>
                    <option>SF</option>
                    <option>공포</option>
                    <option>추리</option>
                    <option>역사</option>
                    <option>시</option>
                    <option>고전</option>
                    <option>동화</option>
                </select>
            </div>

            <p className="helper">
                * 등록을 하면 표지가 자동으로 생성됩니다
            </p>

            <div className="actions">
                <button className="submit-btn" onClick={handleRegister} disabled={isLoading}>
                    {isLoading ? "생성 중..." : "등록"}
                </button>
                <button
                    type="button"
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
