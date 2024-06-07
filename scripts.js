document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for menu
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveNavLink(this);
        });
    });

    // Set active link in menu
    function setActiveNavLink(link) {
        document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
    }

    // Intersection Observer for active menu link
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveNavLink(document.querySelector(`nav ul li a[href="#${entry.target.id}"]`));
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // 60% of the section must be visible
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // Smooth appearance on load
    const elementsToAppear = document.querySelectorAll('.hero-content, section, nav, .top-bar');
    elementsToAppear.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
    });

    window.addEventListener('load', () => {
        elementsToAppear.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s, transform 1s';
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // Smooth appearance on menu click
    function smoothAppear() {
        elementsToAppear.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s, transform 1s';
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Smooth appearance and scroll on menu click
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                smoothAppear();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gallery with modal
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<div class="modal-content"><img src="${src}" alt="Gallery Image"><span class="close">&times;</span></div>`;
            document.body.appendChild(modal);

            const closeModal = () => {
                document.body.removeChild(modal);
            };

            modal.querySelector('.close').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});

// Copyright
document.getElementById("currentYear").innerText = new Date().getFullYear();
