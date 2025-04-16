document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значения полей формы
    const nameValue = form.querySelector('input[name="name"]').value.trim();
    const emailValue = form.querySelector('input[name="email"]').value.trim();
    const messageValue = form.querySelector('textarea[name="message"]').value.trim();

    // Простейшая валидация – проверяем, что все поля заполнены
    if (!nameValue || !emailValue || !messageValue) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Собираем данные формы в объект
    const formData = {
      name: nameValue,
      email: emailValue,
      message: messageValue
    };

    // Отправляем данные на сервер через fetch (укажите правильный URL вместо '/send-form')
    fetch("/send-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ошибка при отправке данных");
        }
      })
      .then(data => {
        // Обработка ответа от сервера
        alert("Сообщение успешно отправлено!");
        form.reset();
      })
      .catch(error => {
        alert("Ошибка: " + error.message);
      });
  });
});