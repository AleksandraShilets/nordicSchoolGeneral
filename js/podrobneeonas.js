document.addEventListener('DOMContentLoaded', function() {
    const aboutModal = document.getElementById('aboutModal');
    const aboutOverlay = document.getElementById('aboutOverlay');
    const aboutToggleButton = document.getElementById('aboutToggleButton');
    const sectionBtn = document.getElementById('sectionBtn');
    const aboutClose = document.querySelector('.aboutClose');

    function openModal() {
        aboutModal.style.display = 'block';
        aboutOverlay.style.display = 'block';
    }

    function closeModal() {
        aboutModal.style.display = 'none';
        aboutOverlay.style.display = 'none';
    }

    if (aboutToggleButton) aboutToggleButton.addEventListener('click', openModal);
    if (sectionBtn) sectionBtn.addEventListener('click', openModal);
    if (aboutClose) aboutClose.addEventListener('click', closeModal);
    if (aboutOverlay) aboutOverlay.addEventListener('click', function(event) {
        if (event.target === aboutOverlay) closeModal();
    });
});
