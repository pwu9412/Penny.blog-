// script.js

// 平滑滾動導航
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 表單送出後跳出簡單提示
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 假裝送出，不刷新頁面

    alert("感謝你的留言，我會盡快回覆你！");
    form.reset();
  });
}

// 簡單捲動出現動畫（淡入）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.item').forEach(item => {
  observer.observe(item);
});
