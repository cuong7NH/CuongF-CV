



//------------------ Nav Bar Btn Handel ----------------- \\

const navBtn = document.querySelector('#nav-btn');
const menuMobile = document.querySelector('.menu-mobile');
const header = document.querySelector('#header');
const btnGoTop = document.querySelector('.go-to-top');
navBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-open')
    navBtn.classList.toggle('nav-close');
});
// event scroll -- header
window.addEventListener('scroll', () => {
    if(window.scrollY > 73) {
        header.style.backgroundColor = '#000';
        header.classList.add('header-show');
    } else {
        header.style.backgroundColor = 'transparent';
        header.classList.remove('header-show');
    }
    if(window.scrollY > 400) {
        btnGoTop.classList.add('go-to-top--show');
    } else {
        btnGoTop.classList.remove('go-to-top--show');
    }
    // btn go to top
    
});
// Click btn menu 

const headerMenuList = document.querySelectorAll('.header__menu li');
const menuMobileList = document.querySelectorAll('.menu-mobile li');
function removeActiveHeaderMenu() {
    headerMenuList.forEach(el => {
        el.classList.remove('active');
    });
    menuMobileList.forEach(el => {
        el.classList.remove('active');
    });
}


for(let i = 0; i < headerMenuList.length; i++) {
    headerMenuList[i].addEventListener('click', () => {
        removeActiveHeaderMenu();
        headerMenuList[i].classList.add('active');
        menuMobileList[i].classList.add('active');
    }); 
}
 
//--------------------====================--------------- \\







//--------------- Handel Change Background img ----------\\
const heroSection = document.querySelector('#hero');
const imagesHeroUrl = [
    'url(img/bg/bg.jpg)',
    'url(img/bg/bg1.jpg)',
    'url(img/bg/bg2.jpg)',
];


let indexImgHero = 1;
const changeImgHero = setInterval(()=> {
    
    heroSection.style.backgroundImage = imagesHeroUrl[indexImgHero];
    indexImgHero++;
    if(indexImgHero == 3) {
        indexImgHero = 0;
    }
    
}, 5000);


// ----------------------------------------- \\

// ===== Handel witch btn color ========= \\

const witchBtn = document.querySelector('#witch-btn');
const switchColor = document.querySelector('.switch-color');
const buttonsColor = document.querySelectorAll('.btn-color');
const modeElList = document.querySelectorAll('.mode');


function removeSwitchColor() {
    modeElList.forEach(modeEl => {
        modeEl.classList.remove('default', 'skin1', 'skin2', 'skin3', 'skin4','ski5', 'skin6', 'skin7');
    });
    buttonsColor.forEach(btnColor => {
        btnColor.classList.remove('active');
    });
}
function addSwitchColor(elList, colorClass) {
    elList.forEach(el => {
        el.classList.add(colorClass);
    });
}

witchBtn.addEventListener('click', () => {
    switchColor.classList.toggle('switch-color--show');
});


buttonsColor.forEach( btnColor => {
    btnColor.addEventListener('click', () => {
        const dataColor = btnColor.getAttribute('data-color');
        removeSwitchColor();
        addSwitchColor(modeElList, dataColor);
        btnColor.classList.add('active');
    });
});



// ----------------------------------------- \\



// ------------ Slider quote Handel------------ \\

const quotes = [
    {
        quote: 'Stay hungry, stay foolish.',
        author: '- Steve Jobs -'
    },
    {
        quote: 'Học, học nữa, học mãi.',
        author: '- Hồ Chí Minh -'
    },
    {
        quote: 'Make Every Second Count.',
        author: '- Robert W. Bly -'
    }
]
let quoteIndex = 0;
const quoteEL = document.querySelector('#quote');
const authorEl = document.querySelector('#author');

setInterval( () => {
    quoteIndex++;
    if(quoteIndex === quotes.length) {
        quoteIndex =0;
    }
    quoteEL.innerText  = quotes[quoteIndex].quote;
    authorEl.innerText  = quotes[quoteIndex].author;
    
}, 5000)



// ----------------------  Portfolio Isotope -------------------------\\


$(window).on('load', function() {
    $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
    });
    
    
    $('ul.portfolio__menu li').click(function () {
      $('ul.portfolio__menu li').removeClass('filter-active');
      $(this).addClass('filter-active');
      var selector = $(this).attr('data-filter');
      $('.portfolio-container').isotope({
          filter: selector
      });
    })
  });





