document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const nameValue = form.querySelector('input[name="name"]').value.trim();
      const emailValue = form.querySelector('input[name="email"]').value.trim();
      const messageValue = form.querySelector('textarea[name="message"]').value.trim();
  
      if (!nameValue || !emailValue || !messageValue) {
        alert("Пожалуйста, заполните все поля.");
        return;
      }
  
      const formData = {
        name: nameValue,
        email: emailValue,
        message: messageValue
      };
  
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
          alert("Сообщение успешно отправлено!");
          form.reset();
        })
        .catch(error => {
          alert("Ошибка: " + error.message);
        });
    });
  });