// script.js
const videoThumbnail = document.getElementById('videoThumbnail');
const videoModal = document.getElementById('videoModal');
const closeModalButton = videoModal.querySelector('.close');

videoThumbnail.addEventListener('click', () => {
    videoModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    videoModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
    }
});
