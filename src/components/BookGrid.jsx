import "./BookGrid.css";
import React from "react";
import BookCard from "./BookCard";

const BOOKS = [
  { title: "노인과 바다", cover: "" },
  { title: "서유기", cover: "" },
  { title: "반지의 제왕", cover: "" },
  { title: "어린왕자", cover: "" },
  { title: "홍루몽 1", cover: "" },
  { title: "홍루몽 2", cover: "" },
];

function BookGrid() {
  return (
    <div className="book-grid">
      {BOOKS.map((b) => (
        <BookCard key={b.title} title={b.title} cover={b.cover} />
      ))}
    </div>
  );
}

export default BookGrid;
