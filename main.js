document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeAllModals();
        }
    });

    // Add hover effect to nav-title
    const navTitle = document.querySelector('.nav-title');

    navTitle.addEventListener('mouseenter', () => {
        navTitle.style.transform = 'scale(1.05)';
    });

    navTitle.addEventListener('mouseleave', () => {
        navTitle.style.transform = 'scale(1)';
    });

    // Add hover effect to resume btnContainer
    const btnContainer = document.querySelector('.btn-container');

    btnContainer.addEventListener('mouseenter', () => {
        btnContainer.style.transform = 'scale(1.05)';
    });

    btnContainer.addEventListener('mouseleave', () => {
        btnContainer.style.transform = 'scale(1)';
    });

    // Add hover effect to codeIcon
    const codeIcon = document.querySelector('.code-icon');

    codeIcon.addEventListener('mouseenter', () => {
        codeIcon.style.transform = 'scale(1.05)';
    });

    codeIcon.addEventListener('mouseleave', () => {
        codeIcon.style.transform = 'scale(1)';
    });

    // Add hover effect to cameraIcon
    const cameraIcon = document.querySelector('.camera-icon');

    cameraIcon.addEventListener('mouseenter', () => {
        cameraIcon.style.transform = 'scale(1.05)';
    });

    cameraIcon.addEventListener('mouseleave', () => {
        cameraIcon.style.transform = 'scale(1)';
    });

    // Add hover effect to githubIcon
    const githubIcon = document.querySelector('.github-icon');

    githubIcon.addEventListener('mouseenter', () => {
        githubIcon.style.transform = 'scale(1.05)';
    });

    githubIcon.addEventListener('mouseleave', () => {
        githubIcon.style.transform = 'scale(1)';
    });

    // Add hover effect to linkedinIcon
    const linkedinIcon = document.querySelector('.linkedin-icon');

    linkedinIcon.addEventListener('mouseenter', () => {
        linkedinIcon.style.transform = 'scale(1.05)';
    });

    linkedinIcon.addEventListener('mouseleave', () => {
        linkedinIcon.style.transform = 'scale(1)';
    });

});