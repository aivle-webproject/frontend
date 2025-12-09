import { useState } from "react";
import { useParams } from "react-router-dom";
import { BOOKS } from "./BookGrid";
import "./BookDetail.css";
import "./Modal.css";

function EditBookModal({ book, onClose, onSave }) {
    const [title, setTitle] = useState(book.title);
    const [category, setCategory] = useState(book.category);
    const [content, setContent] = useState(book.content);

    const handleSave = () => {
        const updatedBook = { ...book, title, category, content };
        onSave(updatedBook);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal edit-book-modal">
                <h2>도서 수정</h2>
                <label className="modal-label">제목</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                />

                <label className="modal-label">카테고리</label>
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
                    <option value="고전">고전</option>
                    <option value="동화">동화</option>
                </select>

                <label className="modal-label">내용</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용"
                    rows={5}
                />
                <div className="modal-actions">
                    <button onClick={handleSave}>저장</button>
                    <button onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

function BookDetail() {
    const { bookId } = useParams();
    const [book, setBook] = useState(() => {
        const found = BOOKS.find((b) => String(b.id) === String(bookId));
        return found || null;
    });

    const [showEditModal, setShowEditModal] = useState(false);

    if (!book) {
        return (
            <div className="book-detail">
                <h2>책을 찾을 수 없습니다</h2>
            </div>
        );
    }

    const handleSave = (updatedBook) => {
        // TODO: 실제 API 연동 시 여기서 저장 처리
        setBook(updatedBook);
    
    // 나중에 실제 API 붙일 때는 여기에서 fetch/axios로 업데이트 호출하면 됨
    // e.g. await api.updateBook(updatedBook);
    };

    return (
        <div className="book-detail">
            <div className="book-detail-left">
                <div className="book-detail-cover">
                    {book.coverImageUrl ? (
                        <img src={book.coverImageUrl} alt={book.title} />
                    ) : (
                        <div className="book-cover-placeholder" />
                    )}
                </div>
                <div className="book-detail-dates">
                    <p>등록날짜: {book.createdAt}</p>
                    <p>수정날짜: {book.editedAt}</p>
                </div>
            </div>

            <div className="book-detail-right">
                <h1 className="book-detail-title">{book.title}</h1>
                <span className="book-detail-category">{book.category}</span>
                <p className="book-detail-content">{book.content}</p>
            </div>
            <div className="book-detail-actions">
                <button
                    className="edit-book-btn"
                    onClick={() => setShowEditModal(true)}
                >
                    도서 수정
                </button>
            </div>

            {showEditModal && (
                <EditBookModal
                    book={book}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

export default BookDetail;
