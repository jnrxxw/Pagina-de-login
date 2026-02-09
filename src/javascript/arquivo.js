const passwordicons = document.querySelectorAll('.password-icon');

passwordicons.forEach(icon => {
    icon.addEventListener('click', function () {       
        const input = this.parentElement.querySelector('.form-control');

        // alterna tipo do input
        input.type = input.type === 'password' ? 'text' : 'password';

        // alterna ícone
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});