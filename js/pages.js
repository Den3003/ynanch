








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


// const currentUrl = window.location.hash;


// if (currentUrl == '#map') {
//     console.log(map);
//     map.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
// }







const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const sourceImg = document.querySelector('.source');
const bodyClass = document.querySelector('body');


function burgerMenu() {
    burger.addEventListener('click', () => {

        nav.classList.toggle('nav_active');
        setTimeout(() => {
            if(bodyClass.classList.contains("civil__service")) {

            

            if(nav.classList.contains("nav_active")) {
                sourceImg.setAttribute("srcset", "images/Slider/orange-white.svg");

            } else {
                sourceImg.setAttribute("srcset", "images/Slider/logo_black.svg");

            }
        }
        },300)

        burger.classList.toggle('toggle');
    })
}

burgerMenu();





const btnFooter = document.getElementById('scroll_footer')

const map = document.getElementById('footer');

btnFooter.addEventListener('click', function(e) {
    e.preventDefault();
    if(nav.classList.contains('nav_active')) {
        nav.classList.remove('nav_active');
        burger.classList.remove('toggle');

        if(bodyClass.classList.contains("civil__service")) {

            sourceImg.setAttribute("srcset", "images/Slider/logo_black.svg");
        }

    }
    setTimeout(() => {
        map.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    },300);
    
})



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

        window.removeEventListener('keydown', closeModal); 
    }
}

const openModal = () => { 
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



