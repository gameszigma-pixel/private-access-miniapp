const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  try {
    tg.setHeaderColor("#0b111c");
    tg.setBackgroundColor("#0b111c");
  } catch (_) {}
}
const button = document.getElementById("accessBtn");
const feedback = document.getElementById("feedback");
button.addEventListener("click", () => {
  if (!tg || !tg.initData) {
    feedback.textContent = "Открой Mini App через Telegram-бота.";
    return;
  }
  button.disabled = true;
  button.querySelector(".button-text").textContent = "Запрос отправлен";
  feedback.textContent = "Создаём приглашение… ссылка появится в чате";
  tg.sendData("get_access");
});
