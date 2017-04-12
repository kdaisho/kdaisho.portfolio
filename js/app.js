"use strict";

document.addEventListener("DOMContentLoaded", function() {

	var windowsize,
	scrl_amount,
	site_logo,
	alt_logo,
	main_menu = document.getElementById("main-menu"),
	nav = document.getElementById("nav"),
	close_nav = document.getElementById("close-nav");


	//* Add the same listener for multiple different events on the same element
	//* Trying to make the same function as element.on("load, resize, scroll", function(){...}); in jQuery
	function addListenerMulti(el, s, fn) {
		var events = s.split(" ");
		for (var i = 0, len = events.length; i < len; i++) {
			el.addEventListener(events[i], fn, false);
		}
	}

	addListenerMulti(window, "load resize scroll", function() {
		windowsize = window.innerWidth;
		scrl_amount = window.pageYOffset;
		site_logo = document.getElementById("site_logo");
		alt_logo = document.getElementById("alt_logo");

		if (site_logo && alt_logo && windowsize && scrl_amount) {
			if (scrl_amount >= 199 || windowsize <= 767) {
				site_logo.className = "site-logo logo-display mini-logo";
				alt_logo.className = "site-logo logo-hide mini-alt-logo";
			}
			else {
				site_logo.className = "site-logo logo-display";
				alt_logo.className = "site-logo logo-hide";
			}
		}
	});

	main_menu.addEventListener("click", function() {
		nav.style.right = 0;
	});

	close_nav.addEventListener("click", function() {
		nav.style.right = "-320px";
	});

	/* ==== MY WORK section ==== */
	var thumbs_parent = document.getElementById("wrap-thumbs"),
	gal_holder = document.getElementById("gal_holder"),
	img_holder = document.getElementById("img_holder"),
	desc_holder = document.getElementById("desc_holder"),
	modal_bg = document.getElementById("modal_bg"),
	close_btn = document.getElementById("close_btn"),
	prev = document.getElementById("prev"),
	next = document.getElementById("next");


	thumbs_parent.addEventListener("click", displayBox, false);

	next.addEventListener("click", function() {
		var pos = document.getElementById("data_img").getAttribute("data-id");
		nextBox(pos);
	}, false);

	prev.addEventListener("click", function() {
		var pos = document.getElementById("data_img").getAttribute("data-id");
		prevBox(pos);
	}, false);

	function injectEl(pos) {
		img_holder.innerHTML = '<img id="data_img" src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">';
		desc_holder.innerHTML = '<h4>' + bigsrc[pos].title + '</h4><p>' + bigsrc[pos].desc + '</p>';

		if (pos == 18 || pos == 12 || pos == 8) {
			var anchor = document.createElement("a");
			anchor.href = bigsrc[pos].link;
			anchor.setAttribute("target", "_blank");
			anchor.innerHTML = "visit website";
			desc_holder.appendChild(anchor);
		}
	}

	function displayBox(event) {
	//Prevent the parent element being clickable
	if (event.target !== event.currentTarget) {
		var pos = event.target.getAttribute("data-pos");
		injectEl(pos);

		gal_holder.className = "is-active";
		modal_bg.className = "is-active";
	}
	event.stopPropagation();
}

function nextBox(pos) {
	if (pos == 0) {
		pos = bigsrc.length - 1;
	}
	else {
		pos--;
	}
	injectEl(pos);
}

function prevBox(pos) {
	if (pos == bigsrc.length - 1) {
		pos = 0;
	}
	else {
		pos++;
	}
	injectEl(pos);
}

/* --- IIFE to avoid polluting global namespace --- */
(function closeModal() {
	var arr = [modal_bg, close_btn];
	for (var i = 0, len = arr.length; i < len; i++) {
		arr[i].addEventListener("click", function() {
			gal_holder.className = "";
			modal_bg.className = "";
		//location.hash = "#" + "goto-about";
		}, false);
	}
}());

	//Get nav-buttons and destination anchor elements then convert them into an array
	var links = document.getElementsByClassName("link"),
	dest_links = document.getElementsByClassName("dest-link");
	links = [].slice.call(links);
	dest_links = [].slice.call(dest_links);

	function clickListener(link, i) {
		link.addEventListener("click", function() {
			dest_links[i].scrollIntoView({behavior: "smooth"});
		}, false);
	}

	for (var i = 0, len = links.length; i < len; i++) {
		clickListener(links[i], i);
	}

	/* ==== form validation ==== */
	document.getElementById("submit").addEventListener("click", function() {
		var error = false,
			user = document.getElementById("user"),
			userValue = document.getElementById("user").value,
			email = document.getElementById("email"),
			emailValue = document.getElementById("email").value,
			email = document.getElementById("message"),
			msgValue = document.getElementById("message").value;

		if (userValue.length < 2) {
			user.value = "";
			user.setAttribute("placeholder", "please enter a valid name");
			error = true;
		};

		function validateEmail (em) {
			var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]/; // allows any email without extension (e.g. .ca)
			if(filter.test(emailValue)) {
				return true;
			}
			else {
				return false;
			}
		}

		if (validateEmail(emailValue) == false) {
			email.setAttribute("placeholder", "please enter a valid email");
			error = true;
		}

		if (error == false) {
			user.style.border = "none";
			user.setAttribute("placeholder", "");
			email.style.border = "none";
			email.setAttribute("placeholder", "");
		}

		/* === send to php === */
		var myUser = {
			Name: userValue,
			email: emailValue,
			question: msgValue
		};

		var str_json = JSON.stringify(myUser);

		var request = new XMLHttpRequest();
		request.open("POST", "igetEmail.php", true);
		request.setRequestHeader("Content-type", "application/json");
		request.send(str_json);

		request.onload = function() {
			if (request.readyState != 4 || request.status != 200) {
				return;
			}
			else {
				document.getElementById("form").innerHTML = request.responseText;
			}
		};

	});
});





























var trigger = document.getElementById("modal_trigger"),
eraser = document.getElementById("modal_close");

trigger.onclick = function() {
	document.getElementById("modal-overlay").classList.add("modal-on");
}
eraser.onclick = function() {
	document.getElementById("modal-overlay").classList.remove("modal-on"); 
}

window.onscroll = function() { // Trigger for 
	var mobile = false,
	scroll = window.scrollY, // detect amount of scroll for proper browsers
	scroll_ie = pageYOffset; // detect amount of scroll for IE 9+

	if (window.innerWidth <= 767) {
		mobile = true;
	}
	if (mobile && ((scroll || scroll_ie) >= 1490)) {
		document.getElementById("wrap_skill").classList.add("grow-bar");
	}
	else if (!mobile && ((scroll || scroll_ie) >= 910)) {
		document.getElementById("wrap_skill").classList.add("grow-bar");
	}
};

if (!("ontouchstart" in document.documentElement)) { // limit hover interactions to desktops
	document.documentElement.className += "no-touch";
}

var iOS = /iPad|iPhone|iPod/.test(navigator.platform);  // display alternative logo image for iOS and IE as svg animation doesn't work right on them
if(!iOS && (!(navigator.userAgent.indexOf('MSIE')!== -1 || navigator.appVersion.indexOf('Trident/') > 0))) {
	// if NOT iOS or IE
	document.getElementById('site_logo').classList.add("logo-display");
	document.getElementById('alt_logo').classList.add("logo-hide");
}
var app = angular.module('myApp', []);

//Educations Section
app.controller('eduCtrl', ['$scope', function($scope) {
	$scope.cards = [
		{inst: 'treehouse', period: '2015 - Present', url: 'treehouse', title: 'Web Development', location: 'Online',
		desc: 'PHP, JavaScript, Angular.js, CSS3 animations, CSS3 flexbox; etc.'},
		{inst:'herzing', period: '2013 - 2014', url: 'herzing-college', title: 'Graphic Design for Websites', location: 'Montreal',
		desc: 'Photoshop, Illustrator, HTML5, CSS3, JavaScript, Responsive layout; etc.'},
		{inst:'sdf', period: 'Apr - Oct 2008', url: 'sdf', title: 'Advance Officer\'s Course', location: 'Shizuoka, Japan',
		desc: 'Army doctrine / tactics; offensive, defensive and maneuver companies / battalions; etc.'},
		{inst:'hokkai', period: '1996 - 2000', url: 'hokkai', title: 'Bachelor of Laws', location: 'Sapporo, Japan',
		desc: 'Leagl method and procedures, Criminal law, Administrative law, Law of property; etc.'} 
	];
}]);

//Skills & Experiences Section
app.controller('skillsCtrl', ['$scope', function($scope) {
	$scope.progbars = [
		{url: 'ps', alt:  'Photoshop', skill: ' ps', eh:'eh', okay: 'okay', good: 'good', ninja: 'ninja'},
		{url: 'ai', alt: 'Illustrator', skill: 'ai'},
		{url: 'html5', alt: 'HTML5', skill: 'htm'},
		{url: 'css3', alt: 'CSS3', skill: 'css'},
		{url: 'sass', alt: 'Sass', skill: 'sass'},
		{url: 'js', alt: 'JavaScript', skill: 'js'},
		{url: 'jquery', alt: 'jQuery', skill: 'jquery'},
		{url: 'angular', alt: 'angular', skill: 'angular'},
		{url: 'php', alt: 'PHP', skill: 'php'},
		{url: 'git', alt: 'Git', skill: 'git'}
	];
}]);

//My Work Section
app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.images = [
		{url: 'work-carousel-swarovski.jpg', alt: 'mapleharbour website', desc: 'website content: carousel', pos: 20},
		{url: 'work-carousel-new-year.jpg', alt: 'mapleharbour website', desc: 'website content: carousel', pos: 19},
		{url: 'work-mh.jpg', alt: 'mapleharbour website', desc: 'website development', pos: 18},
		{url: 'work-boxingday.jpg', alt: 'carousel design', desc: 'website content: carousel', pos: 17},
		{url: 'work-blackfriday.jpg', alt: 'carousel design', desc: 'website content: carousel', pos: 16},
		{url: 'work-email.jpg', alt: 'email header design', desc: 'visual content: email', pos: 15},
		{url: 'work-social.jpg', alt: 'visual content for social media', desc: 'visual content: social media', pos: 14},
		{url: 'work-tshirt.jpg', alt: 'tshirt design', desc: 'vector: t-shirt design', pos: 13},
		{url: 'work-musician.jpg', alt: 'website for a musician', desc: 'website development', pos: 12},
		{url: 'work-coco.jpg', alt: 'logo design', desc: 'vector: logo design', pos: 11},
		{url: 'work-icons.jpg', alt: 'vector icon design', desc: 'vector: icon design', pos: 10},
		{url: 'work-vector.jpg', alt: 'vector character design', desc: 'vector: character design', pos: 9},
		{url: 'work-larocque.jpg', alt: 'website design', desc: 'website development 2014', pos: 8},
		{url: 'work-cafe.jpg', alt: 'website design', desc: 'website development 2013', pos: 7},
		{url: 'work-logo-design.jpg', alt: 'logo design', desc: 'vector: logo design', pos: 6},
		{url: 'work-logo-design2.jpg', alt: 'logo design', desc: 'business card design', pos: 5},
		{url: 'work-infographic.jpg', alt: 'infographic design', desc: 'vector: infographic', pos: 4},
		{url: 'work-printing.jpg', alt: 'printing design', desc: 'indesign: printing content', pos: 3},
		{url: 'work-bookcover.jpg', alt: 'bookcover design', desc: 'bitmap: book cover design', pos: 2},
		{url: 'work-poster.jpg', alt: 'poster design', desc: 'bitmap: movie poster recreation', pos: 1},
		{url: 'work-tapestry.jpg', alt: 'vector tapestry', desc: 'vector: tapestry imitaion', pos: 0}
	];
}]);

app.controller('validateCtrl', ['$scope', function($scope) {
}]);

app.controller('timeCtrl', ['$scope', function($scope) {
	$scope.getDatetime = new Date();
}]);

var bigsrc = [];
bigsrc[20] = {
	url: 'pan-carousel-swarovski.jpg',
	id: 20,
	title: 'Visual Content: Carousel',
	desc: 'Photoshop',
	link: ''
},
bigsrc[19] = {
	url: 'pan-carousel-new-year.jpg',
	id: 19,
	title: 'Visual Content: Carousel',
	desc: 'Photoshop',
	link: ''
},
bigsrc[18] = {
	url: 'pan-mh-website.jpg',
	id: 18,
	title: 'Graphic/Integration',
	desc: 'Magento: Maple Harbour',
	link: '//mapleharbour.ca'
},
bigsrc[17] = {
	url: 'pan-carousel-bd.jpg',
	id: 17,
	title: 'Visual Content: Carousel',
	desc: 'Photoshop',
	link: ''
},
bigsrc[16] = {
	url: 'pan-carousel-bf.jpg',
	id: 16,
	title: 'Visual Content: Carousel',
	desc: 'Photoshop',
	link: ''
},
bigsrc[15] = {
	url: 'pan-email.jpg',
	id: 15,
	title: 'Visual Content: Social Media',
	desc: 'Photoshop',
	link: ''
},
bigsrc[14] = {
	url: 'pan-social.jpg',
	id: 14,
	title: 'Visual Content: Social Media',
	desc: 'Photoshop',
	link: ''
},
bigsrc[13] = {
	url: 'pan-tshirt-design.jpg',
	id: 13,
	title: 'T-shirt Design',
	desc: 'Illustrator',
	link: ''
},
bigsrc[12] = {
	url: 'pan-musician-website.jpg',
	id: 12,
	title: 'Website Development',
	desc: 'PHP, jQuery',
	link: '//bynki.com/'
},
bigsrc[11] = {
	url: 'pan-coco-logo.jpg',
	id: 11,
	title: 'Logo Design',
	desc: 'Illustrator',
	link: ''
},
bigsrc[10] = {
	url: 'pan-icon-set.jpg',
	id: 10,
	title: 'Icon Design',
	desc: 'Illustrator',
	link: ''
},
bigsrc[9] = {
	url: 'pan-character-design.jpg',
	id: 9,
	title: 'Logo Design',
	desc: 'Illustrator',
	link: ''
},
bigsrc[8] = {
	url: 'pan-larocque-website.jpg',
	id: 8,
	title: 'Website Development',
	desc: 'HTML5, CSS3, jQuery',
	link: '//eaularocque.com/'
},
bigsrc[7] = {
	url: 'pan-cafe-website.jpg',
	id: 7,
	title: 'Website Development',
	desc: 'HTML5, CSS3, jQuery',
	link: ''
},
bigsrc[6] = {
	url: 'pan-logo-design2.jpg',
	id: 6,
	title: 'Logo Design',
	desc: 'Illustrator',
	link: ''
},
bigsrc[5] = {
	url: 'pan-logo-design.jpg',
	id: 5,
	title: 'Business Card Design',
	desc: 'IIllustrator',
	link: ''
},
bigsrc[4] = {
	url: 'pan-infograph.jpg',
	id: 4,
	title: 'Infographic',
	desc: 'Illustrator',
	link: ''
},
bigsrc[3] = {
	url: 'pan-printing.jpg',
	id: 3,
	title: 'Desktop Publishing',
	desc: 'inDesign',
	link: ''
},
bigsrc[2] = {
	url: 'pan-bookcover.jpg',
	id: 2,
	title: 'Book Cover Design',
	desc: 'Photoshop',
	link: ''
},
bigsrc[1] = {
	url: 'pan-poster.jpg',
	id: 1,
	title: 'Movie Poster Recreation',
	desc: 'Photoshop',
	link: ''
},
bigsrc[0] = {
	url: 'pan-tapestry-vector.jpg',
	id: 0,
	title: 'Tapestry Imitation',
	desc: 'Illustrator',
	link: ''
}