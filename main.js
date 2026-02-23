document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initial load animations
    const tl = gsap.timeline();

    tl.from('#header .logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.nav-links li', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-content h1', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    }, '-=0.5')
    .from('.hero-content p', {
        y: 30,
        opacity: 0,
        duration: 0.8
    }, '-=0.8')
    .from('.hero-btns .btn', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    }, '-=0.4')
    .from('.stat-box', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, '-=0.3');

    // Scroll Reveal for sections
    const reveals = ['.section-title', '.lead', '.info-block', '.pillar', '.service-card', '.project-item', '.value-item', '.badge-item'];
    
    reveals.forEach(selector => {
        gsap.utils.toArray(selector).forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });
    });

    // About Main Image Reveal
    gsap.from('.about-main-img', {
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 80%'
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scroll Offset Adjustment
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission animation (Visual only)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Envoi...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Demande envoyée !';
                btn.style.backgroundColor = '#4CAF50';
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
