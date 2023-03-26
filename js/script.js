
// menu burger <=>
const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu) {
   const menuBody = document.querySelector('.header__menu');
   burgerMenu.addEventListener('click', function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
   menuBody.addEventListener('click', function (e) {
      menuBody.classList.remove('_active');
   });
};
// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.visibility = "hidden";
   loader.style.opacity = "0";
   loader.style.transition = "0.7s";
});
// burger <=>
function activateItem(item, sectionId) {
   // Remove the active class from all items
   const items = document.querySelectorAll(".menu__item");
   items.forEach((item) => {
      item.classList.remove("active");
   });

   // Add the active class to the clicked item
   item.classList.add("active");

   // Remove the active class from all sections
   const sections = document.querySelectorAll(".section");
   sections.forEach((section) => {
      section.classList.remove("active-section");
   });

   // Add the active class to the corresponding section
   const section = document.getElementById(sectionId);
   section.classList.add("active-section");
}