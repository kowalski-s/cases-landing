# 🎨 Руководство по кастомизации лендинга

## 📧 Изменение контактной информации

### Email в CTA-секции
Файл: `index.html`  
Строка: ~570

```html
<a href="mailto:your-email@example.com" class="btn btn-primary btn-large">
```

Замените `your-email@example.com` на ваш email.

### Контакты в Footer
Файл: `index.html`  
Строки: ~640-645

```html
<li><a href="mailto:your-email@example.com">Email</a></li>
<li><a href="#">Telegram</a></li>
<li><a href="#">GitHub</a></li>
```

### Console Easter Egg
Файл: `script.js`  
Строка: ~235

```javascript
console.log('%cСвяжитесь со мной: your-email@example.com', 'font-size: 12px; color: #10b981;');
```

## 🎨 Изменение цветовой схемы

### Основные цвета
Файл: `styles.css`  
Строки: 10-30

```css
:root {
    /* Фон */
    --bg-primary: #0a0a0f;     /* Основной фон */
    --bg-secondary: #131318;   /* Вторичный фон */
    --bg-tertiary: #1a1a24;    /* Третичный фон */
    
    /* Акцентные цвета */
    --accent-primary: #6366f1;   /* Индиго */
    --accent-secondary: #8b5cf6; /* Фиолетовый */
    --accent-tertiary: #ec4899;  /* Розовый */
}
```

### Готовые цветовые схемы

#### Синяя схема (Tech)
```css
--accent-primary: #0ea5e9;   /* Cyan */
--accent-secondary: #3b82f6; /* Blue */
--accent-tertiary: #8b5cf6;  /* Purple */
```

#### Зеленая схема (Nature)
```css
--accent-primary: #10b981;   /* Emerald */
--accent-secondary: #14b8a6; /* Teal */
--accent-tertiary: #06b6d4;  /* Cyan */
```

#### Оранжевая схема (Energy)
```css
--accent-primary: #f59e0b;   /* Amber */
--accent-secondary: #f97316; /* Orange */
--accent-tertiary: #ef4444;  /* Red */
```

#### Пурпурная схема (Creative)
```css
--accent-primary: #a855f7;   /* Purple */
--accent-secondary: #d946ef; /* Fuchsia */
--accent-tertiary: #ec4899;  /* Pink */
```

## 📝 Изменение текстов

### Название платформы
Поиск и замена по всему `index.html`:
- Текущее: `EduPlatform`
- Замените на ваше название

### Главный заголовок Hero
Файл: `index.html`  
Строки: ~36-39

```html
<h1 class="hero-title">
    <span class="gradient-text">Платформа</span> для онлайн-школ
    <br>нового поколения
</h1>
```

### Описание в Hero
Файл: `index.html`  
Строки: ~40-43

```html
<p class="hero-description">
    Полноценная CRM-система для управления образовательным процессом: 
    расписание, домашние задания, аналитика и уведомления в реальном времени
</p>
```

### Статистика в Hero
Файл: `index.html`  
Строки: ~54-68

```html
<div class="stat-item">
    <div class="stat-value">3</div>
    <div class="stat-label">Роли пользователей</div>
</div>
```

## 🔧 Изменение функционала

### Отключение анимаций

Для более спокойного дизайна, добавьте в конец `styles.css`:

```css
/* Отключение сложных анимаций */
.gradient-orb,
.floating-card,
.orb-1,
.orb-2,
.orb-3 {
    animation: none !important;
}
```

### Изменение скорости анимаций

Файл: `styles.css`  
Строки: 40-44

```css
/* Transitions */
--transition-fast: 0.2s ease;   /* Быстрые переходы */
--transition-base: 0.3s ease;   /* Базовые переходы */
--transition-slow: 0.5s ease;   /* Медленные переходы */
```

Измените значения на более быстрые (0.1s, 0.15s, 0.2s) или медленные (0.5s, 0.8s, 1s).

### Отключение Parallax

Файл: `script.js`  
Строки: ~120-135

Закомментируйте блок:

```javascript
// Parallax Effect for Hero Section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroVisual = document.querySelector('.hero-visual');
//     ...
// });
```

### Отключение Tilt-эффекта

Файл: `script.js`  
Строки: ~210-230

Закомментируйте:

```javascript
// scenarioCards.forEach(card => {
//     card.addEventListener('mousemove', tiltCard);
//     card.addEventListener('mouseleave', resetTilt);
// });
```

## 🖼️ Добавление изображений

### Логотип

Замените эмодзи на изображение в `index.html`:

```html
<!-- Было -->
<span class="logo-icon">📚</span>

<!-- Стало -->
<img src="logo.png" alt="Logo" class="logo-icon" style="width: 40px; height: 40px;">
```

### Фоновые изображения

Добавьте background-image в hero-секцию в `styles.css`:

```css
.hero {
    background-image: url('images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

### Mockup screenshots

Замените браузерные mockup на реальные скриншоты:

```html
<div class="browser-content">
    <img src="images/student-dashboard.png" alt="Student Dashboard" style="width: 100%; border-radius: 8px;">
</div>
```

## 📱 Настройка адаптивности

### Изменение breakpoints

Файл: `styles.css`  
Найдите media queries и измените значения:

```css
/* Текущие breakpoints */
@media (max-width: 1024px) { /* Laptop */ }
@media (max-width: 768px)  { /* Tablet */ }
@media (max-width: 480px)  { /* Mobile */ }

/* Кастомные breakpoints */
@media (max-width: 1200px) { /* Large tablets */ }
@media (max-width: 992px)  { /* Medium tablets */ }
@media (max-width: 576px)  { /* Small phones */ }
```

## 🎯 Добавление новых секций

### Шаблон секции

```html
<section class="custom-section" id="custom">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">
                Ваш <span class="gradient-text">заголовок</span>
            </h2>
            <p class="section-description">
                Описание секции
            </p>
        </div>
        
        <div class="custom-content">
            <!-- Ваш контент -->
        </div>
    </div>
</section>
```

Добавьте стили в `styles.css`:

```css
.custom-section {
    background: var(--bg-secondary);
    padding: var(--spacing-2xl) 0;
}

.custom-content {
    /* Ваши стили */
}
```

## 🔗 Добавление навигационных ссылок

### В меню

Файл: `index.html`  
Найдите `<ul class="nav-menu">` и добавьте:

```html
<li><a href="#custom" class="nav-link">Новая секция</a></li>
```

### Обновление JavaScript

Файл: `script.js`  
Smooth scroll автоматически работает для всех `href="#..."`.

## 🎬 Настройка анимаций

### Задержка анимации для карточек

Файл: `styles.css`  
Найдите блоки с `animation-delay`:

```css
.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
```

Измените значения для более быстрого (0.05s, 0.1s, 0.15s) или медленного эффекта.

### Создание новой анимации

```css
@keyframes myAnimation {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
}

.my-element {
    animation: myAnimation 0.5s ease-out;
}
```

## 📊 Интеграция аналитики

### Google Analytics

Добавьте перед закрывающим `</head>` в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Yandex.Metrica

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## 📋 Добавление формы обратной связи

### HTML формы

```html
<form class="contact-form" id="contactForm">
    <input type="text" placeholder="Ваше имя" required>
    <input type="email" placeholder="Email" required>
    <textarea placeholder="Сообщение" required></textarea>
    <button type="submit" class="btn btn-primary">Отправить</button>
</form>
```

### Стили формы

```css
.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    max-width: 500px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    padding: var(--spacing-md);
    background: var(--bg-tertiary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
}
```

### JavaScript обработка

```javascript
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Отправка на сервер или email-сервис
    const formData = new FormData(e.target);
    
    // Пример с fetch
    await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        body: formData
    });
    
    alert('Спасибо! Сообщение отправлено.');
    e.target.reset();
});
```

## 🚀 Деплой на хостинг

### GitHub Pages

1. Создайте репозиторий на GitHub
2. Загрузите файлы
3. Settings → Pages → Source: main branch
4. Ваш сайт будет доступен по адресу: `https://username.github.io/repo-name`

### Netlify

1. Перетащите папку проекта на https://app.netlify.com/drop
2. Готово! Получите уникальный URL
3. Можете подключить кастомный домен

### Vercel

```bash
npm i -g vercel
cd your-project
vercel
```

## 🔍 SEO Оптимизация

### Meta-теги

Добавьте в `<head>`:

```html
<meta name="description" content="Ваше описание платформы">
<meta name="keywords" content="онлайн школа, образование, CRM">
<meta name="author" content="Ваше имя">

<!-- Open Graph -->
<meta property="og:title" content="EduPlatform MVP">
<meta property="og:description" content="Платформа для онлайн-школ">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="EduPlatform MVP">
<meta name="twitter:description" content="Платформа для онлайн-школ">
<meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg">
```

---

Нужна помощь с кастомизацией? Пишите: your-email@example.com

