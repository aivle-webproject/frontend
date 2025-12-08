import { useParams } from "react-router-dom";
import { BOOKS } from "./BookGrid";
import "./BookDetail.css";

function BookDetail() {
    const { bookId } = useParams();
    const book = BOOKS.find((b) => b.id === Number(bookId));

    if (!book) {
        return (
            <div className="book-detail">
                <h2>책을 찾을 수 없습니다</h2>
            </div>
        );
    }

    return (
        <div className="book-detail">
            <div className="book-detail-cover">
                {book.coverImageUrl ? (
                    <img src={book.coverImageUrl} alt={book.title} />
                ) : (
                    <div className="book-cover-placeholder" />
                )}
            </div>
            <div className="book-detail-info">
                <h1 className="book-detail-title">{book.title}</h1>
                <span className="book-detail-category">{book.category}</span>
                <p className="book-detail-content">{book.content}</p>
            </div>
        </div>
    );
}

export default BookDetail;
