document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fetches HTML content from a URL and injects it into a target element.
     * @param {string} url - The URL of the component to load (e.g., 'header.html').
     * @param {HTMLElement} targetElement - The DOM element to inject the HTML into.
     * @returns {Promise<void>} A promise that resolves when the component is loaded.
     */
    const loadComponent = (url, targetElement) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${url}: ${response.statusText}`);
                return response.text();
            })
            .then(html => {
                if (targetElement) targetElement.innerHTML = html;
            })
            .catch(error => {
                console.error(error);
                if (targetElement) targetElement.innerHTML = `<p style="color: red; text-align: center;">Error loading component.</p>`;
            });
    };

    /**
     * Sets up header functionality including active link on scroll and smooth scrolling.
     */
    function setupHeaderFunctionality() {
        const navLinks = document.querySelectorAll('#main-header .nav-link');
        const sections = document.querySelectorAll('section[id]');
        const header = document.querySelector('header');
        if (!header || navLinks.length === 0 || sections.length === 0) return;

        const headerHeight = () => header.offsetHeight || 75;

        // Active link on scroll
        const onScroll = () => {
            let current = 'hero'; // Default to 'hero'
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight() - 50;
                if (scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.getElementById(href.substring(1));
                    if (targetElement) {
                        const top = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight();
                        window.scrollTo({ top, behavior: "smooth" });
                    }
                }
            });
        });
    }

    /**
     * Sets up the Intersection Observer to animate elements as they scroll into view.
     */
    function setupIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .section, .project-card, .faq-item');
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // Animate only once
                }
            });
        }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }

    /**
     * Sets up the accordion functionality for the FAQ section.
     */
    function setupFaq() {
        const faqContainer = document.getElementById('faq');
        if (faqContainer) {
            faqContainer.addEventListener('click', (event) => {
                const question = event.target.closest('.faq-question');
                if (question) {
                    question.closest('.faq-item').classList.toggle('open');
                }
            });
        }
    }

    /**
     * Calculates and applies initial positions for items in the skills circle.
     */
    function setupSkillsCircle() {
        const skillsList = document.querySelector('.skills-list');
        if (!skillsList) return;

        const items = skillsList.querySelectorAll('.skill-item');
        const itemCount = items.length;
        if (itemCount === 0) return;

        const radius = skillsList.offsetWidth / 2;
        const angleStep = 360 / itemCount;

        items.forEach((item, index) => {
            const angle = angleStep * index;
            // This transform positions each item on the circle's edge.
            item.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
        });
    }

    /**
     * Main initialization function to load components and then set up all functionalities.
     */
    function initialize() {
        const headerEl = document.getElementById('main-header');
        const footerEl = document.getElementById('main-footer');

        Promise.all([
            loadComponent('header.html', headerEl),
            loadComponent('footer.html', footerEl)
        ]).then(() => {
            // Now that the full DOM is ready, initialize all functionalities
            setupHeaderFunctionality();
            setupIntersectionObserver();
            setupFaq();

            // A short timeout ensures the browser has rendered the layout,
            // making the 'offsetWidth' calculation for the circle reliable.
            setTimeout(setupSkillsCircle, 100);
        });
    }

    // Start the application
    initialize();

}); // End DOMContentLoaded```
