function loadNavbar() {
    const navbarHtml = `
    <nav class="navbar">
        <div class="logo">
            <img src="assets/images/logo.png" alt="Music Non Stop logo" class="logo-img">
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#">Scoreboard</a></li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
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