
document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram?.WebApp;
  const button = document.getElementById("accessBtn");
  const feedback = document.getElementById("feedback");

  if (!button || !feedback) {
    console.error("Кнопка не найдена!");
    return;
  }

  if (tg) {
    tg.ready();
    tg.expand();
  }

  button.addEventListener("click", () => {
    console.log("Кнопка нажата!");

    if (!tg || !tg.initData) {
      feedback.textContent = "Открой сайт через Telegram-бота.";
      return;
    }

    button.disabled = true;
    button.querySelector(".button-text").textContent = "Отправляем запрос...";
    feedback.textContent = "Передаём запрос боту...";

    try {
      tg.sendData("get_access");
      feedback.textContent = "Запрос отправлен! Проверь чат с ботом.";
    } catch (error) {
      button.disabled = false;
      button.querySelector(".button-text").textContent = "Получить доступ";
      feedback.textContent = "Ошибка отправки запроса.";
      console.error(error);
    }
  });
});
