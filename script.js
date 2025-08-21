document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        document.getElementById(button.getAttribute('aria-controls')).hidden = expanded;
    });
});

document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.menu-toggle');
const headerInfo = document.querySelector('.header__info');

menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
this.setAttribute('aria-expanded', !isExpanded);
headerInfo.classList.toggle('is-open');

// Добавляем/удаляем класс для body чтобы запретить прокрутку при открытом меню
document.body.classList.toggle('menu-open', !isExpanded);
});

// Закрываем меню при клике вне его области
document.addEventListener('click', function(e) {
    if (!headerInfo.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.setAttribute('aria-expanded', 'false');
headerInfo.classList.remove('is-open');
document.body.classList.remove('menu-open');
    }
});

// Добавляем обработчик для ссылок в меню (если нужно закрывать меню после клика)
const menuLinks = document.querySelectorAll('.header__info a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        headerInfo.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('callbackForm');
const phoneInput = form.querySelector('.phone-input__field');
const formError = form.querySelector('.form-error');
const formSuccess = form.querySelector('.form-success');

// Маска для телефона
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
let formattedValue = '';
    
    if (value.length > 0) {
    formattedValue = '(' + value.substring(0, 3);
    }
    if (value.length > 3) {
    formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length > 6) {
    formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length > 8) {
    formattedValue += '-' + value.substring(8, 10);
    }

e.target.value = formattedValue;
});

// Валидация формы
form.addEventListener('submit', function(e) {
    e.preventDefault();

const phoneValue = phoneInput.value.replace(/\D/g, '');

if (phoneValue.length !== 10) {
    formError.textContent = 'Введите корректный номер телефона';
formError.style.display = 'block';
return;
    }

formError.style.display = 'none';

// Здесь должна быть отправка формы на сервер
// Для примера просто показываем сообщение об успехе
formSuccess.textContent = 'Спасибо! Мы скоро вам перезвоним.';
formSuccess.style.display = 'block';
form.reset();
    
    setTimeout(() => {
    formSuccess.style.display = 'none';
    }, 5000);
});
});

document.addEventListener('DOMContentLoaded', function() {
// Анимация появления карточек при скролле
const featureCards = document.querySelectorAll('.feature-card');

const animateOnScroll = () => {
    featureCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (cardPosition < screenPosition) {
            card.style.animation = `zoomIn 0.5s ease forwards ${index * 0.15}s`;
        }
    });
};

// Задаем начальные стили для анимации
featureCards.forEach(card => {
    card.style.opacity = '0';
card.style.transform = 'scale(0.9)';
});

// Создаем keyframes для анимации
const style = document.createElement('style');
style.textContent = `
@keyframes zoomIn {
    from {
    opacity: 0;
transform: scale(0.9);
        }
to {
    opacity: 1;
transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Запускаем анимацию при загрузке и скролле
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
// Обработка кликов по кнопкам "Оставить заявку"
const serviceButtons = document.querySelectorAll('.btn-service');

serviceButtons.forEach(button => {
    button.addEventListener('click', function () {
        const serviceName = this.getAttribute('data-service');
        openServiceModal(serviceName);
    });
});

// Функция открытия модального окна
function openServiceModal(serviceName) {
    // Здесь должна быть логика открытия модального окна
    // Например:
    // 1. Создать форму с полями (имя, телефон, выбранная услуга)
    // 2. Показать модальное окно
    // 3. Отправить данные на сервер

    // Временное решение - alert для демонстрации
    alert(`Вы выбрали услугу: ${serviceName}\n\nФорма заявки будет открыта для заполнения.`);

    // В реальном проекте здесь будет что-то вроде:
    // document.getElementById('service-name').value = serviceName;
    // modal.style.display = 'block';
}

// Анимация появления карточек при скролле
const animateOnScroll = () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if (cardPosition < screenPosition) {
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        }
    });
};

// Задаем начальные стили для анимации
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
card.style.transform = 'translateY(20px)';
});

// Создаем keyframes для анимации
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInUp {
    from {
    opacity: 0;
transform: translateY(20px);
        }
to {
    opacity: 1;
transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Запускаем анимацию при загрузке и скролле
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
// Анимация появления элементов при скролле
const featureItems = document.querySelectorAll('.feature-item');

const animateOnScroll = () => {
    featureItems.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (itemPosition < screenPosition) {
            item.style.animation = `fadeInRight 0.5s ease forwards ${index * 0.1}s`;
        }
    });
};

// Задаем начальные стили для анимации
featureItems.forEach(item => {
    item.style.opacity = '0';
item.style.transform = 'translateX(20px)';
});

// Создаем keyframes для анимации
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInRight {
    from {
    opacity: 0;
transform: translateX(20px);
        }
to {
    opacity: 1;
transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Запускаем анимацию при загрузке и скролле
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);

// Параллакс эффект для декоративных элементов
const decorationLeft = document.querySelector('.decoration-image--left');
const decorationRight = document.querySelector('.decoration-image--right');

if (decorationLeft && decorationRight) {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        decorationLeft.style.transform = `translateX(${-20 + scrollPosition * 0.1}%)`;
        decorationRight.style.transform = `translateX(${20 - scrollPosition * 0.1}%)`;
    });
}
});

document.addEventListener('DOMContentLoaded', function() {
// Add click event to problem items
const problemItems = document.querySelectorAll('.problem-item');
problemItems.forEach(item => {
    item.addEventListener('click', function () {
        // You can add functionality here, like showing a modal or scrolling to a form
        console.log('Selected problem: ' + this.querySelector('.problem-text').textContent);
    });
});

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function () {
        // Replace with your actual call-to-action
        window.location.href = '#contact-form'; // or show a modal
    });
}
});

document.addEventListener('DOMContentLoaded', function() {
// Animate steps on scroll
const stepContents = document.querySelectorAll('.step-content');

function animateSteps() {
    stepContents.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initial animation
stepContents.forEach(step => {
    step.style.opacity = '0';
step.style.transform = 'translateY(20px)';
step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSteps();
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.1 });

observer.observe(document.querySelector('.work-process-section'));
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
const question = item.querySelector('.faq-question');

question.addEventListener('click', () => {
    // Close all other items
    faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
        }
    });

// Toggle current item
item.classList.toggle('active');
});
});

// Phone input formatting
const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
    });
}

// Form submission
const callbackForm = document.querySelector('.callback-form');
if (callbackForm) {
    callbackForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const phone = this.querySelector('input[name="phone"]').value;

        // Here you would typically send the data to your server
        console.log('Phone number submitted:', phone);

        // Show success message
        alert('Спасибо! Мы перезвоним вам в течение 5 минут.');
        this.reset();
    });
}
});
 ('DOMContentLoaded', function() {
// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        const answer = document.getElementById(question.getAttribute('aria-controls'));

        // Toggle current item
        question.setAttribute('aria-expanded', !isExpanded);
        answer.setAttribute('aria-hidden', isExpanded);

        // Close other items if needed (optional)
        // faqQuestions.forEach(otherQuestion => {
        //   if (otherQuestion !== question && otherQuestion.getAttribute('aria-expanded') === 'true') {
        //     otherQuestion.setAttribute('aria-expanded', 'false');
        //     document.getElementById(otherQuestion.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');
        //   }
        // });
    });
});

// "Ask question" button functionality
const askQuestionBtn = document.getElementById('askQuestionBtn');
if (askQuestionBtn) {
    askQuestionBtn.addEventListener('click', function () {
        // Scroll to contact form or open modal
        const contactForm = document.querySelector('.contact-form-section');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Alternatively, you could open a modal here
            alert('Пожалуйста, позвоните нам или заполните форму обратной связи на сайте.');
        }
    });
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item);
});
});</script>
<script>document.addEventListener('DOMContentLoaded', function() {
// Обработка кнопки заказа звонка
const callbackBtn = document.getElementById('callbackBtn');
if (callbackBtn) {
callbackBtn.addEventListener('click', function() {
// Здесь можно открыть модальное окно или прокрутить к форме
const contactForm = document.querySelector('.contact-form-section');
if (contactForm) {
contactForm.scrollIntoView({ behavior: 'smooth' });
} else {
// Альтернатива: показать телефон
alert('Позвоните нам: +7 (495) 123-45-67');
}
});
}

// Анимация при прокрутке
const footer = document.querySelector('.site-footer');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-in');
}
});
}, { threshold: 0.1 });

if (footer) {
observer.observe(footer);
}

// Клик по email для копирования
const emailElement = document.querySelector('.contact-item span');
if (emailElement && emailElement.textContent.includes('@')) {
emailElement.style.cursor = 'pointer';
emailElement.addEventListener('click', function() {
const email = this.textContent;
navigator.clipboard.writeText(email).then(() => {
const originalText = this.textContent;
this.textContent = 'Email скопирован!';
setTimeout(() => {
  this.textContent = originalText;
}, 2000);
});
});
}
});