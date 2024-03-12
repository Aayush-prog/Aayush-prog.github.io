const totalItems = document.querySelectorAll(".carousel-item").length;
let currentIndex = Math.floor(totalItems / 2);
const carousel = document.getElementById("carousel");

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const middleIndex = Math.floor(totalItems / 2);
  const items = document.querySelectorAll(".carousel-item");
  const shift = middleIndex - currentIndex;

  items.forEach((item, index) => {
    const position = (index + shift + totalItems) % totalItems;
    const distance = Math.abs(position - middleIndex);
    const scale = 1 - 0.2 * distance + 0.1;
    item.style.order = position;
    item.style.transform = `scale(${scale})`;
  });
}
function disableElementOnSmallScreens() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var thresholdWidth = 428;
  console.log(screenWidth);
  var elementsToDisable = document.querySelectorAll(".fifthFrame__button");

  elementsToDisable.forEach(function (element) {
    if (screenWidth < thresholdWidth) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}
disableElementOnSmallScreens();
window.addEventListener("load", disableElementOnSmallScreens);
window.addEventListener("resize", disableElementOnSmallScreens);
