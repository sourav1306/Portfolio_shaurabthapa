document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-links');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');

    let feedbackContainer = contactForm.querySelector('.form-feedback');
    if (!feedbackContainer) {
        feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'form-feedback';
        contactForm.insertBefore(feedbackContainer, contactForm.firstChild);
    }

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        }

        if (messageInput.value.trim() === '') {
            errors.push('Message is required');
        }

        if (errors.length > 0) {
            feedbackContainer.className = 'form-feedback error';
            feedbackContainer.innerHTML = errors.map(e => `<p>${e}</p>`).join('');
        } else {
            feedbackContainer.className = 'form-feedback success';
            feedbackContainer.innerHTML = '<p>Thank you! Message sent.</p>';
            contactForm.reset();
        }
    });
});
