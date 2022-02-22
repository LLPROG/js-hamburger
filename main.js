
let hambBtnOpen = document.querySelector('.open');
let hambBtnClose = document.querySelector('.close');
let hambMenu = document.querySelector('.hamburger-menu');


hambBtnOpen.addEventListener('click', function() {
	
    hambMenu.style.display = 'block';

})

hambBtnClose.addEventListener('click', function() {
	
    hambMenu.style.display = 'none';

})




