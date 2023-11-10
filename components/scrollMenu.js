export const scrollMenu = () => {
	document.addEventListener('scroll', function() {
    var fixedBlock = document.querySelector('.menu');
    var footer = document.querySelector('.footer');
    var scrollY = window.scrollY || window.pageYOffset;
    var footerTop = footer.offsetTop;

    if (scrollY > 100) { 
      fixedBlock.classList.add('fixed');
    } 

    else if (scrollY + fixedBlock.fixedBlock.offsetHeight >= footer.offsetTop) {
      fixedBlock.classList.remove('fixed');
    }
    
    else {
      fixedBlock.classList.remove('fixed');
    }
  });
}


