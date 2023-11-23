const imgs = document.querySelector('#img')
const img = document.querySelectorAll('#img img')

let slideAtual = 0

function carrossel(){
    slideAtual++

    if(slideAtual > img.length - 1){
        slideAtual = 0
    }

    imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`
}

setInterval(carrossel, 1050)









document.addEventListener("DOMContentLoaded", function () {
    const carouselList = document.querySelector(".carrossel-list");
    const items = carouselList.querySelectorAll("li");
    const itemCount = items.length;
    let currentIndex = 0;
    let interval;
  
    function showItem(index) {
      const newPosition = -index * 100 + "%";
      carouselList.style.transform = "translateX(" + newPosition + ")";
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % itemCount;
      showItem(currentIndex);
    }
  
    function prevItem() {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      showItem(currentIndex);
    }
  
    function startInterval() {
      interval = setInterval(nextItem, 2000);
    }
  
    document.querySelector(".botao-proximo").addEventListener("click", function () {
      clearInterval(interval);
      nextItem();
      startInterval();
    });
  
    document.querySelector(".botao-anterior").addEventListener("click", function () {
      clearInterval(interval);
      prevItem();
      startInterval();
    });
  
    startInterval();
  
    carouselList.addEventListener("mouseenter", function () {
      clearInterval(interval);
    });
  
    carouselList.addEventListener("mouseleave", function () {
      startInterval();
    });
  });
  