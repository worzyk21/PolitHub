// Текст для відображення
const text = "POLITHUB PROJECT";

// Швидкість анімації в мілісекундах
const speed = 100;

// Отримуємо елемент, в якому буде відображатися текст
const textElement = document.getElementById('animated-text');

// Функція для виводу тексту з анімацією
function typeWriter() {
    // Виводимо текст по одній букві
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Запускаємо функцію анімації
let i = 0;
typeWriter();

