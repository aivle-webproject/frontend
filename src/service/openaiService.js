// src/services/openaiService.js
import axios from "axios";

export async function generateCoverImage({ title, content, apiKey }) {
    const prompt = `
책 제목: ${title}
책 소개: ${content}
위 내용을 바탕으로 어울리는 책 표지를 그려줘
`;

    try {
        const res = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );

        // ✅ 방어 코드
        if (
            !res.data ||
            !res.data.data ||
            !res.data.data[0] ||
            !res.data.data[0].url
        ) {
            throw new Error("이미지 생성 응답이 올바르지 않습니다.");
        }

        return res.data.data[0].url;

    } catch (err) {
        console.error("❌ OpenAI 이미지 생성 실패:", err.response?.data || err.message);

        // ✅ 과제용 fallback (매우 중요)
        return "https://placehold.co/512x512?text=Cover+Image";
    }
}
