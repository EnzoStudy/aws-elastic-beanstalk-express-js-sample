const express = require('express');
const app = express();
const port = 8080;


// 현재 날짜와 시간 객체 생성
const now = new Date();

// 시, 분, 초, 밀리초 추출
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// 두 자리 수 포맷팅 (예: 01, 09 등)
const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');
const formattedSeconds = seconds.toString().padStart(2, '0');

// 현재 시간 문자열로 출력
const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
console.log("현재 시간:", currentTime);



app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
