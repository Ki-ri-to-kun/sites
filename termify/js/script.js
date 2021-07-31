function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

var searchInput = document.querySelector('.search__input');
var searchIcon = document.querySelector('.icon-search');
searchInput.addEventListener('focus', function(event){
	searchIcon.style.opacity = 1;
});
searchInput.addEventListener('blur', function(event){
	searchIcon.style.opacity = .5;
});

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide' ).mount();

	new Splide( '.recent .splide', {
			type   : 'loop',
			perPage: 4,
			perMove: 1,
			gap: 20,
			pagination: false,
	}).mount();
} );

var toggleButton = document.querySelector('.button-toggle');
var mobileNav = document.querySelector('.menu-mobile');


toggleButton.addEventListener('click', function(){
	 
		mobileNav.classList.remove('close-menu-mobile');
		mobileNav.classList.add('make-visible');
		setTimeout(function(){
			mobileNav.classList.add('open-menu-mobile');
		}, 1);
});

mobileNav.addEventListener('click', function(){
	mobileNav.classList.remove('open-menu-mobile');
	mobileNav.classList.add('close-menu-mobile');
	
	setTimeout(function(){
			mobileNav.classList.remove('make-visible');
			sidebarBtn.classList.remove('decrease-zindex');
		}, 301);
});



var buttons = document.querySelectorAll('button');
console.log(buttons);
for (var i = 0; i <buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		console.log('Кнопка нажата!');
	});
}

