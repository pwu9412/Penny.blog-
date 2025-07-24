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
// script.js

// 平滑滾動（如果有用 #about 等連結）
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 表單送出提示（適用 contact.html）
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("感謝你的留言，我會盡快回覆你！");
    form.reset();
  });
}

// 滾動動畫
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.item').forEach(item => {
  observer.observe(item);
});

// 作品分類切換
const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
