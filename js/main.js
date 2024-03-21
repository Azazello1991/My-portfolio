
// swiper:
const swiper = new Swiper('.swiper-container.two', {
   pagination: '.swiper-pagination',
   paginationClickable: true,
   effect: 'coverflow',
   loop: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
   }
});



// burger:
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu'); //мобильное меню
const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

// Mobile Menu:
document.addEventListener('DOMContentLoaded', () => {
   burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      mobileMenu.classList.toggle('hidden'); //когда меню открыто
   });
});

// Translate page:
const objTanslate = {
   ua: {
      message: 'Привіт, мене звати Сергій Бойко. Я веб-розробник. Маю 4 роки досвіду створення сайтів та веб-додатків. Пропоную вам свої послуги. Гарантія якості та зручні терміни. Гарного дня!',
      title: 'Пропоную переглянути мої проекти',
      subtitle: 'Щоб перейти на сайт, натисніть на картку:',
      slideDescription: {
         p1: 'Верстка інтернет-магазину з функціональним кошиком для покупок, слайдерами, зірковим рейтингом, валідацією форм, реєстрацією, мобільним адаптивом, плавним скролом, липкою шапкою, меню-бургер, та інше.',
         p2: 'Верстка інтернет-магазину, фільтр продуктів, ціновий діапазон, слайдери, валідація форм, мобільна адаптивність, плавне прокручування, липкою шапкою, меню-бургер, та інше.',
         p3: 'Асинхронний веб-додаток, який створює завдання для груп людей. Працює з API, локальним сховищем. Є пошук і фільтри. Робота над помилками API.',
         p4: 'Веб-додаток у вигляді еквалайзера. Працює з локальним сховищем та в режимі реального часу.',
         p5: 'Лендінг клінінгової компанії.',
      }
   },

   en: {
      message: "Hello, my name is Sergey Boyko. I'm a web developer.I have 4 years of experience in creating websites and web applications.I offer you my services.Quality guarantee and good deadlines.Have a good day!",
      title: "I suggest you look at my projects",
      subtitle: "To go to the site, click on the card:",
      slideDescription: {
         p1: 'Layout of an online store with a functional shopping cart, sliders, star rating, form validation, registration, mobile responsiveness, smooth scrolling, sticky header, burger menu and more.',
         p2: 'Layout of an online store, product filter, price range, sliders, form validation, mobile responsiveness, smooth scrolling, sticky header, burger menu and more.',
         p3: 'An asynchronous web application that creates tasks for groups of people. Works with API, local storage. Has search and filters. Working on API errors.',
         p4: 'Web application in the form of an equalizer. Works with local storage and real time.',
         p5: 'Landing of a cleaning company.',
      }
   }
}

const aboutMy = document.querySelector('.about-my');
const projects = document.querySelector('.projects');
const clickText = document.querySelector('.click');
const description = document.querySelectorAll('.swiper-text');


document.addEventListener('click', (e) => {
   const target = e.target;

   if (target.classList.contains('js-ua') || target.classList.contains('js-en')) {
      transtateText(target);
   }
});

function transtateText(target) {

   if (target.id === 'ua') {
      aboutMy.textContent = objTanslate.ua.message;
      projects.textContent = objTanslate.ua.title;
      clickText.textContent = objTanslate.ua.subtitle;

      for (let i = 0; i < description.length; i++) {
         if (description[i].id === "p1") {
            description[i].textContent = objTanslate.ua.slideDescription.p1;
         } else if (description[i].id === "p2") {
            description[i].textContent = objTanslate.ua.slideDescription.p2;
         } else if (description[i].id === "p3") {
            description[i].textContent = objTanslate.ua.slideDescription.p3;
         } else if (description[i].id === "p4") {
            description[i].textContent = objTanslate.ua.slideDescription.p4;
         } else if (description[i].id === "p5") {
            description[i].textContent = objTanslate.ua.slideDescription.p5;
         }
      }

   } else if (target.id === 'en') {
      aboutMy.textContent = objTanslate.en.message;
      projects.textContent = objTanslate.en.title;
      clickText.textContent = objTanslate.en.subtitle;

      for (let i = 0; i < description.length; i++) {
         if (description[i].id === "p1") {
            description[i].textContent = objTanslate.en.slideDescription.p1;
         } else if (description[i].id === "p2") {
            description[i].textContent = objTanslate.en.slideDescription.p2;
         } else if (description[i].id === "p3") {
            description[i].textContent = objTanslate.en.slideDescription.p3;
         } else if (description[i].id === "p4") {
            description[i].textContent = objTanslate.en.slideDescription.p4;
         } else if (description[i].id === "p5") {
            description[i].textContent = objTanslate.en.slideDescription.p5;
         }
      }
   }
}

// ---------------------- hover cards ----------------- //

// Get all elements with the class "hover"
let hoverElements = document.querySelectorAll('.hover');

// Add "mouseleave" event listener to each element
hoverElements.forEach(function (element) {
   element.addEventListener('mouseleave', function () {
      // Remove the class "hover" from the current element
      element.classList.remove('hover');
   });
});