document.addEventListener("DOMContentLoaded", () => {
    // Получаем все кнопки бронирования по их классу
    const bookingButtons = document.querySelectorAll(".booking-button");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close");
    const bookingForm = document.getElementById("bookingForm");
  
    // Открываем модальное окно при клике на любую кнопку
    bookingButtons.forEach(button => {
      button.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });
  
    // Закрытие модального окна при нажатии на кнопку (крестик)
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Закрытие модального окна при клике вне его содержания
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Обработка отправки формы
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // Здесь можно добавить дополнительную логику для отправки данных на сервер
      alert("Спасибо! Ваша заявка отправлена.");
      modal.style.display = "none";
      bookingForm.reset();
    });
  });
  