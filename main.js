function showPageFromHash() {
    const pages = document.querySelectorAll('.page');
    const hash = window.location.hash || '#home'; // default to #home
    const targetId = hash.replace('#', '');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', showPageFromHash);
window.addEventListener('hashchange', showPageFromHash);
