var app = angular.module('myApp', []);

//Educations Section
app.controller('eduCtrl', ['$scope', function($scope) {
	$scope.cards = [
		{inst: 'treehouse', period: '2015 - 2017', url: 'treehouse', title: 'Web Development', location: 'Online',
		desc: 'PHP, JavaScript, Angular.js, CSS3 animations, CSS3 flexbox; etc.'},
		{inst:'herzing', period: '2013 - 2014', url: 'herzing-college', title: 'Graphic Design for Websites', location: 'Montreal',
		desc: 'Photoshop, Illustrator, HTML5, CSS3, JavaScript, Responsive layout; etc.'},
		{inst:'sdf', period: 'Apr - Oct 2008', url: 'sdf', title: 'Advance Officer\'s Course', location: 'Shizuoka, Japan',
		desc: 'Army doctrine / tactics; offensive, defensive and maneuver companies / battalions; etc.'},
		{inst:'hokkai', period: '1996 - 2000', url: 'hokkai', title: 'Bachelor of Laws', location: 'Sapporo, Japan',
		desc: 'Legal method and procedures, Criminal law, Administrative law, Law of property; etc.'} 
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