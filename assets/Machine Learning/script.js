document.addEventListener('DOMContentLoaded', function() {
    const dropdownText = document.querySelector('.dropdown-text');
    const dropdownImage = document.querySelector('.dropdown-image');

    dropdownText.addEventListener('click', function() {
        if (dropdownImage.style.display === 'none' || dropdownImage.style.display === '') {
            dropdownImage.style.display = 'block';
        } else {
            dropdownImage.style.display = 'none';
        }
    });
});