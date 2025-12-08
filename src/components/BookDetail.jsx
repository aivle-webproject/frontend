import { useParams } from "react-router-dom";

function BookDetail() {
    const { bookId } = useParams();

    return (
        <div style={{ padding: "40px" }}>
            <h2>도서 상세 페이지</h2>
            <p>선택한 책 ID: {bookId}</p>
        </div>
    );
}

export default BookDetail;
