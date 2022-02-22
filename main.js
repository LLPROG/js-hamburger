
let hambBtnOpen = document.querySelector('.open');
let hambBtnClose = document.querySelector('.close');
let hambMenu = document.querySelector('.hamburger-menu');


hambBtnOpen.addEventListener('click', function() {
	
    // hambMenu.style.display = 'block';
    hambMenu.classList.add('active');
})

hambBtnClose.addEventListener('click', function() {
	
    // hambMenu.style.display = 'none';
    hambMenu.classList.remove('active');
})

