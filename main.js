const links = document.querySelectorAll('[data-target]');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');

        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    });
});
