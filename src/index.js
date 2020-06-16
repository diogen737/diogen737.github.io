import './styles/index.scss';

const scrollBar = document.getElementById('scroll-bar');

document.addEventListener('scroll', () => {
    const winFullHeight = document.body.clientHeight;
    const barWidth = 100.0 * window.scrollY / (winFullHeight - window.innerHeight);
    scrollBar.style.width = `${barWidth}%`;
});