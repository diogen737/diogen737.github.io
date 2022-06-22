import '/styles/index.scss';

/**
 * Show loading spinner for a little while
 */
const loaderDelay = 800;
const main = document.getElementById('main');
setTimeout(() => {
    document.getElementById('ld-container').remove();
    main.classList.remove('d-none');
}, loaderDelay);
setTimeout(() => {
    main.classList.remove('transparent');
}, loaderDelay + 200);

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
}, { passive: true });

/**
 * Inject current year
 */
const footerYear = document.getElementById('footer-year');
footerYear.innerHTML = new Date().getFullYear();

/**
 * Setup images lazy loading
 */

 const loadImage = (image, io) => {
    // Load picture sources
    const parent = image.parentNode;
    if (parent.nodeName.toLowerCase() === 'picture') {
        const sources = parent.querySelectorAll('source');
        sources.forEach(s => s.srcset = s.dataset.srcset)
    }

    // Load img itself
    image.src = image.dataset.src;
    image.classList.add('lazy-loaded');
    image.classList.remove('lazy-loading');
    io && io.unobserve(image);
 }

 const lazyImages = document.querySelectorAll('.lazy-loading');
 const supportsIO = ('IntersectionObserver' in window)
    && ('IntersectionObserverEntry' in window)
    && ('isIntersecting' in window.IntersectionObserverEntry.prototype);

if (supportsIO) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.filter(e => e.isIntersecting)
            .forEach(e => loadImage(e.target, imageObserver));
    });
    lazyImages.forEach(img => imageObserver.observe(img));
} else {
    // load all images straight away
    lazyImages.forEach(img => loadImage(img));
}
