
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
      subtitle: 'Щоб перейти на сайт, натисніть на картку:'
   },

   en: {
      message: "Hello, my name is Sergey Boyko. I'm a web developer.I have 4 years of experience in creating websites and web applications.I offer you my services.Quality guarantee and good deadlines.Have a good day!",
      title: "I suggest you look at my projects",
      subtitle: "To go to the site, click on the card:"
   }
}

const aboutMy = document.querySelector('.about-my');
const projects = document.querySelector('.projects');
const clickText = document.querySelector('.click');


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

   } else if (target.id === 'en') {
      aboutMy.textContent = objTanslate.en.message;
      projects.textContent = objTanslate.en.title;
      clickText.textContent = objTanslate.en.subtitle;
   }
}