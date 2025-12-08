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
        onSave({ ...book, title, category, content });
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
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="카테고리"
                />
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
    const book = BOOKS.find((b) => b.id === Number(bookId));
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
        console.log("저장된 도서:", updatedBook);
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
            <div className="book-detail-info">
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
