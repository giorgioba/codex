(function () {
    const body = document.body;
    const nav = document.querySelector('.site-nav ul');
    const navToggle = document.querySelector('.nav-toggle');
    const currentYearEl = document.querySelector('.current-year');

    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    if (navToggle && nav) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
            const isOpen = body.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const setActiveLink = () => {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.site-nav a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('is-active');
            } else {
                link.classList.remove('is-active');
            }
        });
    };
    setActiveLink();

    // Menu filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    if (filterButtons.length && menuItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                filterButtons.forEach(btn => btn.classList.remove('is-active'));
                button.classList.add('is-active');
                menuItems.forEach(item => {
                    const category = item.dataset.category.split(' ');
                    if (filter === 'all' || category.includes(filter)) {
                        item.style.removeProperty('display');
                        item.classList.add('fade-in');
                        setTimeout(() => item.classList.remove('fade-in'), 400);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Carousel autoplay
    const carousels = document.querySelectorAll('.carousel[data-autoplay="true"]');
    carousels.forEach(carousel => {
        const items = Array.from(carousel.children);
        if (items.length <= 1) return;
        let index = 0;
        items.forEach((item, i) => {
            item.style.opacity = i === 0 ? '1' : '0.35';
            item.style.transition = 'opacity 700ms ease, transform 700ms ease';
        });
        setInterval(() => {
            const prev = items[index];
            prev.style.opacity = '0.35';
            prev.style.transform = 'scale(0.96)';
            index = (index + 1) % items.length;
            const next = items[index];
            next.style.opacity = '1';
            next.style.transform = 'scale(1.02)';
        }, 5000);
    });

    // Interactive timeline hover effect
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => item.classList.add('is-active'));
        item.addEventListener('mouseleave', () => item.classList.remove('is-active'));
    });

    // Reservation form handling (mock)
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        const feedback = reservationForm.querySelector('.form-feedback');
        reservationForm.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(reservationForm);
            const guestName = formData.get('name');
            const experience = reservationForm.querySelector('select[name="experience"] option:checked').textContent;
            feedback.textContent = `Thank you, ${guestName || 'guest'}. Our concierge will confirm your ${experience.toLowerCase()} within 12 hours.`;
            reservationForm.reset();
        });
    }

    // Intersection observer to animate cards
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.highlight, .experience-card, .menu-item, .observatory-card, .team-card, .timeline__item, .private-grid article').forEach(el => {
        el.classList.add('will-animate');
        observer.observe(el);
    });
})();
