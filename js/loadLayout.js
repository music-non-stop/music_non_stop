function loadNavbar() {
    const navbarHtml = `
    <nav class="navbar">
        <div class="logo">
            <a href="index.html"><img src="assets/images/logo.png" alt="Music Non Stop logo" class="logo-img"></a>
        </div>
        <div class="burger-menu" id="burger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="scoreboard.html">Scoreboard</a></li>
            <li><a href="feedbackform.html">Feedback</a></li>
        </ul>
    </nav>`;

    document.getElementById('navbar-placeholder').insertAdjacentHTML('afterbegin', navbarHtml);

    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', (event) => {
        navLinks.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || burgerMenu.contains(event.target);
        if (!isClickInsideNav) {
            navLinks.classList.remove('active');
        }
    });
}

function loadFooter() {
    const footerHtml = `
    <footer class="footer">
        <a href="https://github.com" target="_blank" class="footer-link">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://codeinstitute.net" target="_blank" class="footer-link">
            <i class="fa-regular fa-circle"></i>
        </a>
    </footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();
    loadFooter();
});