
const express = require('express');
const app = express();
const port = 8080;

// 포트 번호 설정
const port = 3000;

app.get('/', (req, res) => {
    // 현재 날짜와 시간 객체 생성
    const now = new Date();

    // 시, 분, 초 추출
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 두 자리 수 포맷팅 (예: 01, 09 등)
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // 현재 시간 문자열 생성
    const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // 'Hello World!'와 현재 시간 함께 출력
    res.send(`Hello World! The current time is: ${currentTime}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
