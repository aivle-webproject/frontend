import "./BookCard.css";
import React from "react";

function BookCard({ title, cover }) {
  return (
    <div className="book-card">
      <div className="book-cover-wrapper">
        {cover ? (
          <img src={cover} alt={title} className="book-cover" />
        ) : (
          <div className="book-cover placeholder" />
        )}
      </div>
      <p className="book-title">{title}</p>
    </div>
  );
}

export default BookCard;
