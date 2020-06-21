const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesOffsetAfter: 0,
            setWrapperSize: true,
            width: 240,
            spaceBetween: 16,
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider();


window.addEventListener('resize', () => {
    mobileSlider();
})


var wrapp = document.querySelector('.swiper-wrapper');
var changeText = document.querySelector('.swiper-wrapper--height');
var buttonViewAll = document.querySelector('.info-more');
var buttonText = document.querySelector('.info-more__name');
var textHide = 'Скрыть';
var text = 'Показать всё';


var isSlideShow = true;
buttonViewAll.addEventListener("click", function () {
    if (isSlideShow) {
        wrapp.classList.add('swiper-wrapper--height');
        buttonViewAll.classList.add('arrowUp');
        buttonText.textContent = 'Скрыть';
        isSlideShow = false;
        buttonText.style.color = "#FF3E79";
        buttonViewAll.style.marginTop = 0;
    } else {
        wrapp.classList.remove('swiper-wrapper--height');
        buttonViewAll.classList.remove('arrowUp');
        buttonText.textContent = 'Показать все';
        isSlideShow = true;
        buttonText.style.color = "black";
        buttonViewAll.style.marginTop = '15px';
    }
});










