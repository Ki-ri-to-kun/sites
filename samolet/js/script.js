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


new Vue({
	el: '#root',
	data: {
		basePrice: 210589,
		selectedOptionalProducts:[],
		selectedMainProducts: {
			engines: null,
			painting: null,
			cabine: null,
			basic: null,
			avionics: null,
			bseat: null,
			tanks: null
		},
		productPrices: {
			engines: {
				engine1: 0,
				engine2: 16050,
				engine3: 45266	
			},
			painting: {
				painting1: 0,
				painting2: 2321,
				painting3: 0
			},
			cabine: {
				cabine1: 0,
				cabine2: 4742
			},
			basic: {
				basic1: 518,
				basic2: 3296
			},
			avionics: {
				avionics1: 0,
				avionics2: 1245
			},		
			fseat: {
				fseat1: 1553,
				fseat2: 0,
				fseat3: 729
			},
			bseat: {
				bseat1: 4803,
				bseat2: 3296,
				bseat3: 2763
			},
			autopilot: {
				autopilot1: 3788,
				autopilot2: 942,
				autopilot3: 506,
				autopilot4: 1079,
				autopilot5: 2922
			},
			parachute: {
				parachute1: 0,
				parachute2: 984
			},
			tanks: {
				tank1: 0,
				tank2: 7637
			}
		}
	},
	methods: {
		getPrice(section, item){
			var price =  this.productPrices[section][item];
			var formattedPrice = price.toLocaleString("en-US", { minimumFractionDigits: 0});
			return '+ $' + formattedPrice;
		},
		makeOrder(){
			alert(`Your order is accepted! Total price: ${this.totalPrice}`)
		}
	},
	computed: {
		totalPrice(){
			var summa = this.basePrice + this.optionalPrice;
			for(var item in this.selectedMainProducts){
				summa += this.selectedMainProducts[item];
			}
			return summa;	
		},
		optionalPrice(){
			var summa = 0;
			for(var item of this.selectedOptionalProducts){
				summa += item;
			}
			return summa;
		}
	}
}
);



var sidebarLinks = document.querySelectorAll('.dashboard-sidebar ul li');
for(var i=0; i<sidebarLinks.length; i++){
	sidebarLinks[i].addEventListener('click', function(){
		for(var y=0; y<sidebarLinks.length; y++){
			sidebarLinks[y].classList.remove('dash-main-menu__item--active');
		}
		this.classList.add('dash-main-menu__item--active');
	});
}


var spoiler = document.querySelector('.spoiler');
var arrow = document.querySelector('.spoiler-arrow');
var spoilerContent = document.querySelector('.spoiler-equipment');


spoiler.addEventListener('click', function(){
	if(spoilerContent.classList.contains('make-visible')){
		spoilerContent.classList.toggle('active');
		arrow.classList.toggle('rotate');
		setTimeout(function(){
			spoilerContent.classList.toggle('make-visible');
		}, 310);
	} else {
		spoilerContent.classList.toggle('make-visible');
		setTimeout(function(){
			spoilerContent.classList.toggle('active');
			arrow.classList.toggle('rotate');
		}, 10);
	}
});
/*
*/