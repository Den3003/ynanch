// const currentUrl = window.location.hash;
// const map = document.getElementById('map');

// if (currentUrl == '#map') {
//     console.log(map);
//     map.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
// }

// const currentUrl = window.location.hash;
// const map = document.getElementById('map');





let pageSlider = new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    direction: 'vertical',

    slidesPerView: 'auto',



    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    

    watchOverflow: true,

    parallax: true,

    speed: 800,

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

   /*  on: {

    
        

        afterInit: function() {
           slideToHash(currentUrl, map, pageSlider)
        },
        /* freeMode: true, */
    // }, */


    /* observer: true,

    observeParents: true,

    observeSlideChildren: true, */


    // freeMode: true,
    // init: false,

    /* on: {
       
    }, */

     
    

    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true
    },


    hashNavigation: true,

    
});



// function slideToHash(a,b,pageSlider) {
//     if(a == '#map') {
//         pageSlider.freeMode = true;
//         b.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//             });
//     }
// };

// pageSlider.destroy();

// setTimeout(() => {
//     console.log(1);
//     pageSlider.init();
// }, 10000);

// pageSlider.params.freeMode = true;

const buttonUp = document.querySelector('.scroll-up');
// const fraction = document.querySelector('.fraction__block');

pageSlider.on('slideChange', function(e) {
    if (e.activeIndex >= 4) {
        // console.log('yes');
        buttonUp.classList.add('active');
        
    } else {
        
        // console.log('no');
        buttonUp.classList.remove('active');
    }
    /*  if(e.activeIndex === 3) {
        fraction.style.display = 'flex';
    } else {
        fraction.style.display = 'none';
        
    } */
});







// pageSlider.params.speed = 3000;


// pageSlider.update();
// const currentUrl = window.location.hash;
// const map = document.getElementById('map');

// if (currentUrl == '#map') {
//     console.log(map);
//     map.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
// }
// pageSlider.on('afterInit', function(e) {
//     console.log(e);
// });
//  if(currentUrl == '#map') {
    // pageSlider.slideTo(4, 1500);
    // window.addEventListener('load', function() {
        // pageSlider.init(false);
        // pageSlider.update()
        // pageSlider.param.freeMode = false;
        // pageSlider.slideTo(2, 1500);
        // console.log(1);
    // });
//  };
// const currentUrl = (e) => {
//     if(e === '#map') {
//         pageSlider.slideTo(3, 1500);
//         console.log(1);
//     }
// };







// window.addEventListener('load', currentUrl(window.location.hash));


let pageSlider2 = new Swiper('.page2',{
    wrapperClass: "page__wrapper2",
    slideClass: "page__screen2",

    direction: 'horizontal',

    slidesPerView: 'auto',

    keyboard: {
        enabled: true,

        onlyInViewport: true,

        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    parallax: true,


    speed: 1000,

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

    /* pagination: {
        el: '.swiper-pagination',

        type: 'fraction',
    }, */

    /* scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true
    }, */

    nested: true,
})







// pageSlider2.on('slideChangeTransitionEnd', () => {
//     console.log(1);
// })







document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
            form.classList.remove('_sending');

            } else {
                alert('Ошибка');
            

            }
        } else {
            alert('Заполните обязательные поля')
        }


    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);


            if (input.classList.contains('email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                    console.log(error);
                } 
                
            } else  if(input.value === '') {
                formAddError(input)
                error++;
                // console.log(error);
            }
        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});







const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");


function burgerMenu() {
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav_active');

        burger.classList.toggle('toggle');

        if (nav.classList.contains('nav_active')) {
            pageSlider.disable();   
        } 

        if(!nav.classList.contains('nav_active')) {
            pageSlider.enable();   
    
        }
       
    })

    
    

}

burgerMenu();


const navMenu = document.querySelectorAll('.menu_close');

navMenu.forEach(e => {
    e.addEventListener('click', function() {
        if (nav.classList.contains('nav_active') && burger.classList.contains('toggle')) {
            
            burger.classList.remove('toggle')
            nav.classList.remove('nav_active')       
    } 
        if (!nav.classList.contains('nav_active')) {
            pageSlider.enable();
            setTimeout(() => {

                switch (e.innerHTML) {
                    
                    case "Services":
                        pageSlider.slideTo(2, 1500);
                        break;
                    case "Projects":
                        pageSlider.slideTo(4, 1500);
                        break;
                    case "About Us":
                        pageSlider.slideTo(1, 1500);
                        break;
                    case "Contacts":
                        pageSlider.slideTo(6, 1500);
                        break;
                }
                
            },600);
        }
     
     })
} )








pageSlider.on('slideChange', function() {
    if (pageSlider.realIndex == 3) {    
        document.querySelectorAll('.text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 

    } else {
        document.querySelectorAll('.text_fade').forEach((e) => {
            e.classList.remove('active');
            
        }) 
    }
});


pageSlider2.on('slideChange', function() {
    if (pageSlider2.realIndex == 0) {    
        document.querySelectorAll('.text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 

    } else {
        document.querySelectorAll('.text_fade').forEach((e) => {
            e.classList.remove('active');
            
        }) 
    }
});


pageSlider2.on('slideChange', function() {
    if (pageSlider2.realIndex == 1) {    
        
        document.querySelectorAll('.pipeline__text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 

    } else {
        document.querySelectorAll('.pipeline__text_fade').forEach((e) => {
            e.classList.remove('active');
            
        }) 
    }
});

pageSlider2.on('slideChange', function() {
    if (pageSlider2.realIndex == 2) {    
        
        document.querySelectorAll('.envi__text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 

    } else {
        document.querySelectorAll('.envi__text_fade').forEach((e) => {
            e.classList.remove('active');
            
        }) 
    }
});

pageSlider2.on('slideChange', function() {
    if (pageSlider2.realIndex == 3) {    
        
        document.querySelectorAll('.civil__text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 

    } else {
        document.querySelectorAll('.civil__text_fade').forEach((e) => {
            e.classList.remove('active');
            
        }) 
    }
});

pageSlider2.on('slideChange', function() {
    if (pageSlider2.realIndex == 4) {    
        document.querySelectorAll('.text_fade').forEach((e) => {
            e.classList.add('active');
            
        }) 
    }
});




const fractionHidden = document.querySelector('.fraction__block');
const fractionFlex = document.querySelector('.fraction__flex');

pageSlider.on('slideChange', function(e) {
    if (e.activeIndex == 3) {
        setTimeout(() => {
            fractionFlex.style.transform = "translateY(0%)";
        },700)
        fractionHidden.classList.add('active');
    } else {
        setTimeout(() => {
            fractionFlex.style.transform = "translateY(100%)";
        },700)
        fractionHidden.classList.remove('active');
    }
});



let page2AllSlides = document.querySelector('.slider__total');
const fadeCurrent = document.querySelector('.current_change')
const fractionColor = document.querySelector('.fraction__block')

page2AllSlides.innerHTML = pageSlider2.slides.length;

pageSlider2.on('slideChange', function() {
   
    fadeCurrent.style.transform = "translateY(-100%)";
    fadeCurrent.style.opacity = 0;

    
    setTimeout(() => {
        fadeCurrent.style.transform = "translateY(100%)";

    },500)
     
      
       
    if(pageSlider2.realIndex == 3 && pageSlider2.previousIndex == 2) {
        setTimeout(() => {
            fractionColor.style.color = "#181818";
        },700)
    } else if(pageSlider2.realIndex == 4 && pageSlider2.previousIndex == 3) {
        setTimeout(() => {
            fractionColor.style.color = "#FBFBFB";
        },700)
    } else if(pageSlider2.realIndex == 3 && pageSlider2.previousIndex == 4) {
        fractionColor.style.color = "#181818";
    } else {
        fractionColor.style.color = "#FBFBFB";

    }
           
       
    setTimeout(() => {   
        let currentSlide = ++pageSlider2.realIndex;
        fadeCurrent.innerHTML = currentSlide;
        fadeCurrent.style.opacity = 1;
        fadeCurrent.style.transform = "translateY(0%)";
    },1000);
     
});











// document.querySelector('.item_contact').addEventListener('click', (e) => {
//     pageSlider.slideTo(6, 1500);
//     e.preventDefault();
// });

// document.querySelector('.item_services').addEventListener('click', (e) => {
//     pageSlider.slideTo(2, 1500);
//     e.preventDefault();
// });

// document.querySelector('.item_projects').addEventListener('click', (e) => {
//     pageSlider.slideTo(4, 1500);
//     e.preventDefault();
// });

document.querySelector('.slogan__button_left').addEventListener('click', (e) => {
    pageSlider.slideTo(2, 1500);
    e.preventDefault();
});

document.querySelector('.slogan__button_right').addEventListener('click', (e) => {
    pageSlider.slideTo(4, 1500);
    e.preventDefault();
});

// document.querySelector('.item_about').addEventListener('click', (e) => {
//     pageSlider.slideTo(1, 1500);
//     e.preventDefault();
// });

document.querySelector('.scroll-up').addEventListener('click', () => {
    pageSlider.slideTo(0, 1500);
});



const modalController = ({modal, btnOpen, btnClose}) => { 
const buttonElems = document.querySelectorAll(btnOpen);   
const modalElem = document.querySelector(modal);  


modalElem.style.cssText = `  
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`; 

const closeModal = e => {  
    const target = e.target;  
    
    if(target === modalElem || target.closest(btnClose) || e.code === 'Escape' || target.classList.contains('modal__container')) {  
        modalElem.style.opacity = 0;
        
        setTimeout(() => {  
            modalElem.style.visibility = 'hidden';
        }, 300)
        pageSlider.enable();

        window.removeEventListener('keydown', closeModal); 
    }
};

const openModal = () => { 
    pageSlider.disable();   
    modalElem.style.visibility = 'visible'; 
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal) 
    
}; 


buttonElems.forEach(btn => { 
    btn.addEventListener('click', openModal); 
});

modalElem.addEventListener('click', closeModal);
};






modalController({ 
    modal: '.modal',  
    btnOpen: '.button_modal', 
    btnClose: '.modal_close'  
});

modalController({ 
    modal: '.map-modal1',  
    btnOpen: '.circle1',  
});

modalController({ 
    modal: '.map-modal2',  
    btnOpen: '.circle2',  
});

modalController({ 
    modal: '.map-modal3',  
    btnOpen: '.circle3',  
});

modalController({ 
    modal: '.map-modal4',  
    btnOpen: '.circle4',  
});

modalController({ 
    modal: '.map-modal5',  
    btnOpen: '.circle5',  
});


modalController({ 
    modal: '.map-modal6',  
    btnOpen: '.circle6',  
});

modalController({ 
    modal: '.map-modal7',  
    btnOpen: '.circle7',  
});

modalController({ 
    modal: '.map-modal8',  
    btnOpen: '.circle8',  
});

modalController({ 
    modal: '.map-modal9',  
    btnOpen: '.circle9',  
});

modalController({ 
    modal: '.map-modal10',  
    btnOpen: '.circle10',  
});

modalController({ 
    modal: '.map-modal11',  
    btnOpen: '.circle11',  
});

modalController({ 
    modal: '.map-modal12',  
    btnOpen: '.circle12',  
});

modalController({ 
    modal: '.map-modal13',  
    btnOpen: '.circle13',  
});

modalController({ 
    modal: '.map-modal14',  
    btnOpen: '.circle14',  
});

modalController({ 
    modal: '.map-modal15',  
    btnOpen: '.circle15',  
});

modalController({ 
    modal: '.map-modal16',  
    btnOpen: '.circle16',  
});

modalController({ 
    modal: '.map-modal17',  
    btnOpen: '.circle17',  
});

modalController({ 
    modal: '.map-modal18',  
    btnOpen: '.circle18',  
});

modalController({ 
    modal: '.map-modal19',  
    btnOpen: '.circle19',  
});

modalController({ 
    modal: '.map-modal20',  
    btnOpen: '.circle20',  
});

modalController({ 
    modal: '.map-modal21',  
    btnOpen: '.circle21',  
});

modalController({ 
    modal: '.map-modal22',  
    btnOpen: '.circle22',  
});

modalController({ 
    modal: '.map-modal23',  
    btnOpen: '.circle23',  
});

modalController({ 
    modal: '.map-modal24',  
    btnOpen: '.circle24',  
});

modalController({ 
    modal: '.map-modal25',  
    btnOpen: '.circle25',  
});

modalController({ 
    modal: '.map-modal26',  
    btnOpen: '.circle26',  
});

modalController({ 
    modal: '.map-modal27',  
    btnOpen: '.circle27',  
});

modalController({ 
    modal: '.map-modal28',  
    btnOpen: '.circle28',  
});

modalController({ 
    modal: '.map-modal29',  
    btnOpen: '.circle29',  
});

modalController({ 
    modal: '.map-modal30',  
    btnOpen: '.circle30',  
});

modalController({ 
    modal: '.map-modal31',  
    btnOpen: '.circle31',  
});

modalController({ 
    modal: '.map-modal32',  
    btnOpen: '.circle32',  
});

modalController({ 
    modal: '.map-modal33',  
    btnOpen: '.circle33',  
});

modalController({ 
    modal: '.map-modal34',  
    btnOpen: '.circle34',  
});




modalController({ 
    modal: '.dynamic-modal__mobile',  
    btnOpen: '.dynamic_mobile-btn',  
});

modalController({ 
    modal: '.pipeline-modal__mobile',  
    btnOpen: '.pipeline_mobile-btn',  
});

modalController({ 
    modal: '.envi-modal__mobile',  
    btnOpen: '.envi_mobile-btn',  
});

modalController({ 
    modal: '.civil-modal__mobile',  
    btnOpen: '.civil_mobile-btn',  
});

modalController({ 
    modal: '.oil-modal__mobile',  
    btnOpen: '.oil_mobile-btn',  
});

modalController({ 
    modal: '.company-modal__mobile',  
    btnOpen: '.company_mobile-btn',  
});

// window.addEventListener('scroll', function() {
//     let scroll = document.querySelector('.scroll-up');
//     scroll.classList.toggle("active", this.window.scrollY>500);
// })


// const orange = document.getElementById('orange');
// orange.addEventListener('click', () => {
//     alert('orange');
// })


// const tooltip = document.querySelector('.tooltip');
// const circles = document.querySelectorAll('.circle');

// circles.forEach(circle => {
//    circle.addEventListener('mousemove', function(e) {
//         tooltip.innerText = this.dataset.title;
//         tooltip.style.top = e.y + 'px';
//         tooltip.style.left = e.x + 'px';
//    });

//    circle.addEventListener('mouseenter', function() {
//     tooltip.style.display = 'block';
//    });

//    circle.addEventListener('mouseleave', () => {
//     tooltip.style.display = 'none';
//    });
// });
