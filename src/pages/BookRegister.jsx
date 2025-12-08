import "./BookRegister.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


function BookRegister() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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
                <select>
                    <option>로맨스</option>
                    <option>SF</option>
                    <option>공포</option>
                    <option>추리</option>
                    <option>역사</option>
                    <option>시</option>
                </select>
            </div>

            <p className="helper">
                * 등록을 하면 표지가 자동으로 생성됩니다
            </p>

            <div className="actions">
                <button className="submit-btn">등록</button>
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
