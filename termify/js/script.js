
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
searchInput.addEventListener('input', function(event){
	this.classList.add('bg-image');
	if (event.target.value !== ''){
		this.classList.remove('bg-image');
	}
	
});
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