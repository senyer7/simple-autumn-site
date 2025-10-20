// Анимация падающих листьев
function createLeaves() {
  const leavesContainer = document.querySelector(".leaves-container");
  const numberOfLeaves = 15;

  // Очищаем контейнер перед созданием новых листьев
  leavesContainer.innerHTML = "";

  for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    // Случайные параметры
    const size = Math.random() * 30 + 20;
    const posX = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    const rotation = Math.random() * 360;

    // Применение стилей
    leaf.style.left = `${posX}vw`;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.animationDelay = `${delay}s`;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.transform = `rotate(${rotation}deg)`;

    // Удаляем лист после завершения анимации
    leaf.addEventListener("animationend", function () {
      leaf.remove();
      // Создаем новый лист вместо удаленного
      setTimeout(createLeaf, Math.random() * 2000);
    });

    leavesContainer.appendChild(leaf);
  }
}

// Функция для создания одного листа
function createLeaf() {
  const leavesContainer = document.querySelector(".leaves-container");
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // Случайные параметры
  const size = Math.random() * 30 + 20;
  const posX = Math.random() * 100;
  const delay = Math.random() * 5;
  const duration = Math.random() * 10 + 10;
  const rotation = Math.random() * 360;

  // Применение стилей
  leaf.style.left = `${posX}vw`;
  leaf.style.width = `${size}px`;
  leaf.style.height = `${size}px`;
  leaf.style.animationDelay = `${delay}s`;
  leaf.style.animationDuration = `${duration}s`;
  leaf.style.transform = `rotate(${rotation}deg)`;

  // Удаляем лист после завершения анимации
  leaf.addEventListener("animationend", function () {
    leaf.remove();
    // Создаем новый лист вместо удаленного
    setTimeout(createLeaf, Math.random() * 2000);
  });

  leavesContainer.appendChild(leaf);
}

// Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  createLeaves();

  // Плавная прокрутка для якорей
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
