import '../styles/index.scss';

const scrollBar = document.getElementById('scroll-bar');
const githubLink = document.getElementById('github-link');
document.addEventListener('scroll', () => {
    /**
     * Top scroll idicator
     */
    const winFullHeight = document.body.clientHeight;
    const barWidth = 100.0 * window.scrollY / (winFullHeight - window.innerHeight);
    scrollBar.style.width = `${barWidth}%`;

    /**
     * Collapse GitHub button while scrolling
     */
    window.scrollY ? githubLink.classList.add('collapsed') : githubLink.classList.remove('collapsed');
});

const footerYear = document.getElementById('footer-year');
footerYear.innerHTML = new Date().getFullYear();