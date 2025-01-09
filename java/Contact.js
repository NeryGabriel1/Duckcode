document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.onsubmit = function(event) {
        event.preventDefault();
        
        setTimeout(() => {
            successMessage.style.display = 'block';
            form.reset();
        }, 500);
    };
});