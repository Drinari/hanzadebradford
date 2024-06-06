document.addEventListener("DOMContentLoaded", () => {
   
    // Параллакс-эффект для изображения фона
    document.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        document.querySelector(".hero").style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });


    // Плавная прокрутка для меню
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    

    // Активная вкладка меню
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('nav ul li a').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Переключение вкладок меню
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

    // Плавное появление элементов при загрузке
    const elements = document.querySelectorAll('.hero-content, section, nav, .top-bar');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
    });

    window.addEventListener('load', () => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transition = 'opacity 1s, transform 1s';
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

 // Плавное появление элементов при нажатии на меню

    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.hero-content, section, nav, .top-bar');
        elements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
        });
    
        function smoothAppear() {
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.transition = 'opacity 1s, transform 1s';
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    
        // Добавляем обработчик события для каждой ссылки меню
        const links = document.querySelectorAll('nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
    
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    // Вызываем функцию для плавного появления элементов
                    smoothAppear();
                    
                    // Прокручиваем к секции
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    

    // Галерея с эффектом
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

// copyright

document.getElementById("currentYear").innerText = new Date().getFullYear();

// active menu after scrolling

// Функция для установки класса active на активной вкладке
function setActiveTab() {
    const tabs = document.querySelectorAll('.tab-button');
    const scrollPosition = window.scrollY;

    tabs.forEach(tab => {
        const section = document.querySelector(tab.getAttribute('data-tab'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tab.classList.add('active');
        }
    });
}

// Устанавливаем активную вкладку при загрузке страницы
window.addEventListener('DOMContentLoaded', setActiveTab);

// Обновляем активную вкладку при прокрутке страницы
window.addEventListener('scroll', setActiveTab);




    

