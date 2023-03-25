
// menu burger <=>
const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu) {
   const menuBody = document.querySelector('.header__menu');
   burgerMenu.addEventListener('click', function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};
// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.visibility = "hidden";
   loader.style.opacity = "0";
   loader.style.transition = "0.7s";
});



const items = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll('section');

items.forEach(item => {
   item.addEventListener('click', () => {
      const currentActiveItem = document.querySelector('.active');
      const currentActiveSection = document.getElementById(currentActiveItem.dataset.section);
      const targetSection = document.getElementById(item.dataset.section);

      currentActiveItem.classList.remove('active');
      item.classList.add('active');
      currentActiveSection.classList.add('hidden');
      targetSection.classList.remove('hidden');
   });
});