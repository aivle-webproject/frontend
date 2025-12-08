import "./BookGrid.css";
import React from "react";
import BookCard from "./BookCard";

const BOOKS = [
  { id: 1, title: "노인과 바다", coverImageUrl: "", content: "노인과 바다는 어니스트 헤밍웨이의 대표작으로, 늙은 어부 산티아고가 거대한 청새치와 사투를 벌이는 이야기입니다.", category: "소설" },
  { id: 2, title: "서유기", coverImageUrl: "", content: "서유기는 중국 명나라 시대의 소설로, 삼장법사와 손오공, 저팔계, 사오정의 천축국 여행기를 담고 있습니다.", category: "고전" },
  { id: 3, title: "반지의 제왕", coverImageUrl: "", content: "반지의 제왕은 J.R.R. 톨킨의 판타지 소설로, 호빗 프로도가 절대반지를 파괴하기 위한 여정을 그립니다.", category: "판타지" },
  { id: 4, title: "어린왕자", coverImageUrl: "", content: "어린왕자는 생텍쥐페리의 작품으로, 소행성 B612에서 온 어린왕자와 조종사의 만남을 담은 이야기입니다.", category: "동화" },
  { id: 5, title: "홍루몽 1", coverImageUrl: "", content: "홍루몽은 중국 청나라 시대의 소설로, 가보옥과 임대옥의 비극적인 사랑 이야기를 담고 있습니다.", category: "고전" },
  { id: 6, title: "홍루몽 2", coverImageUrl: "", content: "홍루몽 2권에서는 가씨 가문의 몰락과 주인공들의 운명이 펼쳐집니다.", category: "고전" },
];

export { BOOKS };

function BookGrid() {
  return (
    <div className="book-grid">
      {BOOKS.map((b) => (
        <BookCard key={b.id} id={b.id} title={b.title} coverImageUrl={b.coverImageUrl} />
      ))}
    </div>
  );
}

export default BookGrid;
