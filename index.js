document.getElementById('toggleButton').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block'; 
        this.textContent = 'Скрыть форму'; 
    } else {
        formContainer.style.display = 'none';
        this.textContent = 'Показать форму'; 
    }
});
// Получаем элементы
const modal = document.getElementById('modal');
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.querySelector('.close');

// Открытие модального окна
toggleButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие модального окна
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие при клике вне окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
