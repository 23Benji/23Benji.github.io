document.addEventListener('DOMContentLoaded', () => {

    // --- Load Header and Footer ---
    const loadComponent = (url, targetElementId) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                const targetElement = document.getElementById(targetElementId);
                if (targetElement) {
                    targetElement.innerHTML = html;
                    // Re-run specific setup if needed (like header nav links after load)
                    if (targetElementId === 'main-header') {
                        setupHeaderFunctionality();
                    }
                    // If footer has interactive elements needing JS, setup here
                } else {
                    console.error(`Target element #${targetElementId} not found.`);
                }
            })
            .catch(error => {
                console.error(`Could not load component from ${url}:`, error);
                const targetElement = document.getElementById(targetElementId);
                if (targetElement) {
                    targetElement.innerHTML = `<p style="color: red; text-align: center;">Error loading component: ${url}</p>`;
                }
            });
    };

    loadComponent('header.html', 'main-header');
    loadComponent('footer.html', 'main-footer');


    // --- Header Navigation & Active State ---
    function setupHeaderFunctionality() {
        const navLinks = document.querySelectorAll('#main-header .nav-link'); // Ensure specificity
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = () => document.querySelector('header')?.offsetHeight || 75; // Function to get current height

        // Active link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                // Activate slightly before reaching the top, consider header height
                if (scrollPosY >= sectionTop - headerHeight() - 50 && scrollPosY < sectionTop + sectionHeight - headerHeight() - 50) {
                    current = section.getAttribute('id');
                }
            });

            // Handle possible no section match (e.g., near top/bottom, during smooth scroll)
            if (!current && scrollPosY < sections[0].offsetTop - headerHeight() - 50) {
                current = 'hero'; // Default to hero if above first section
            }

            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkHref = link.getAttribute('href');
                if (linkHref === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, {passive: true}); // Use passive listener for scroll performance

        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight();

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });

                        // Force remove active class from others, add to clicked one
                        navLinks.forEach(lnk => lnk.classList.remove('active'));
                        this.classList.add('active');

                        // Optional: Close mobile menu if open
                        // closeMobileMenu();
                    }
                }
            });
        });
    }


    // --- Intersection Observer for Scroll Animations ---
    // Add all elements intended for animation here
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-left, .animate-right, .section, .project-card, .skill-item, .faq-item'
    );

    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply staggered delay using a custom property
                if (entry.target.classList.contains('stagger-item')) {
                    entry.target.style.setProperty('--stagger-delay', `${index * 0.1}s`); // Adjust multiplier as needed
                }
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Unobserve after animation
            }
            // No 'else' block: Animation happens once when scrolling down
        });
    };

    const observerOptions = {
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before element fully visible
        threshold: 0.1 // At least 10% visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animatedElements.forEach(el => {
        observer.observe(el);
    });


    // --- FAQ Toggle Functionality ---
    // Use event delegation on the FAQ section container for efficiency
    const faqContainer = document.getElementById('faq');
    if (faqContainer) {
        faqContainer.addEventListener('click', (event) => {
            const question = event.target.closest('.faq-question');
            if (!question) return; // Exit if click wasn't on a question element

            const faqItem = question.closest('.faq-item');
            if (faqItem) {
                faqItem.classList.toggle('open');

                // Optional: Close other FAQs when one is opened
                // const allFaqItems = faqContainer.querySelectorAll('.faq-item');
                // allFaqItems.forEach(item => {
                //     if (item !== faqItem && item.classList.contains('open')) {
                //         item.classList.remove('open');
                //     }
                // });
            }
        });
    } else {
        console.warn("FAQ container with ID 'faq' not found for event listener setup.");
    }


    // --- Potential Future Additions ---
    // - Mobile menu toggle
    // - Contact form submission handling (AJAX)
    // - Filter/Sort functionality for projects

}); // End DOMContentLoaded