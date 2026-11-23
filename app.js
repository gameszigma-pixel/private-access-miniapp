
document.addEventListener("DOMContentLoaded", () => {
  const tg = window.Telegram?.WebApp;
  const button = document.getElementById("accessBtn");
  const feedback = document.getElementById("feedback");

  if (!button || !feedback) {
    console.error("PRIVATE ACCESS: кнопка не найдена");
    return;
  }

  if (tg) {
    tg.ready();
    tg.expand();
  }

  button.addEventListener("click", () => {
    console.log("PRIVATE ACCESS: кнопка нажата");

    if (!tg || typeof tg.sendData !== "function") {
      feedback.textContent =
        "Открой приложение через кнопку в Telegram.";
      return;
    }

    button.disabled = true;
    feedback.textContent = "Отправляем запрос боту…";

    try {
      tg.sendData("get_access");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      button.disabled = false;
      feedback.textContent = "Не удалось отправить запрос.";
    }
  });
});
