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
var body = document.querySelector('body');
var backdrop = document.querySelector('.backdrop');
var toggleButtonLines = document.querySelectorAll('.button-toggle__bar');


var firstBurgerLine = toggleButton.firstChild;
var secondBurgerLine = firstBurgerLine.nextSibling;
var thirdBurgerLine = toggleButton.lastChild;

toggleButton.addEventListener('click', function(){
	 if (!mobileNav.classList.contains('make-visible')){
		mobileNav.classList.remove('close-menu-mobile');
		mobileNav.classList.add('make-visible');
		setTimeout(function(){
			mobileNav.classList.add('open-menu-mobile');
		}, 1);
		body.classList.add('lock');
		backdrop.style.display = "block";

		for (var i = 0; i< toggleButtonLines.length; i++){
			toggleButtonLines[i].style.background = "#fff";
		}
	
		firstBurgerLine.style.transform = "translateX(6px) rotate(45deg) translateY(11.4px) ";
		thirdBurgerLine.style.transform = "translateX(6px) rotate(-45deg) translateY(-11.4px) ";
		secondBurgerLine.style.visibility = "hidden";
		
	 } else {
		mobileNav.classList.remove('open-menu-mobile');
		mobileNav.classList.add('close-menu-mobile');
		setTimeout(function(){
				mobileNav.classList.remove('make-visible');
			}, 301);
			body.classList.remove('lock');
			backdrop.style.display = "none";

			for (var i = 0; i< toggleButtonLines.length; i++){
				toggleButtonLines[i].style.background = "#000";
			}

			firstBurgerLine.style.transform = "rotate(0)";
			thirdBurgerLine.style.transform = "rotate(0)";
			secondBurgerLine.style.visibility = "visible";
	 }
		
});

mobileNav.addEventListener('click', function(){
	mobileNav.classList.remove('open-menu-mobile');
	mobileNav.classList.add('close-menu-mobile');
	
	setTimeout(function(){
			mobileNav.classList.remove('make-visible');
		}, 301);
		body.classList.remove('lock');
		backdrop.style.display = "none";

		for (var i = 0; i< toggleButtonLines.length; i++){
			toggleButtonLines[i].style.background = "#000";
		}
		
		firstBurgerLine.style.transform = "rotate(0)";
		thirdBurgerLine.style.transform = "rotate(0)";
		secondBurgerLine.style.visibility = "visible";
});


backdrop.addEventListener('click', function(){
	mobileNav.classList.remove('open-menu-mobile');
	mobileNav.classList.add('close-menu-mobile');
	
	setTimeout(function(){
			mobileNav.classList.remove('make-visible');
		}, 301);
		body.classList.remove('lock');
		backdrop.style.display = "none";

		for (var i = 0; i< toggleButtonLines.length; i++){
			toggleButtonLines[i].style.background = "#000";
		}
		
		firstBurgerLine.style.transform = "rotate(0)";
		thirdBurgerLine.style.transform = "rotate(0)";
		secondBurgerLine.style.visibility = "visible";
});


/*
var buttons = document.querySelectorAll('button');
console.log(buttons);
for (var i = 0; i <buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		console.log('Кнопка нажата!');
	});
}*/

/*
new Vue({
	el: '',
	data: {
		
		}	
	},
	methods: {
		
	}
	
});
*/
/*
var sidebarLinks = document.querySelectorAll('.dashboard-sidebar ul li');
for(var i=0; i<sidebarLinks.length; i++){
	sidebarLinks[i].addEventListener('click', function(){
		for(var y=0; y<sidebarLinks.length; y++){
			sidebarLinks[y].classList.remove('dash-main-menu__item--active');
		}
		this.classList.add('dash-main-menu__item--active');
	});
}
*/