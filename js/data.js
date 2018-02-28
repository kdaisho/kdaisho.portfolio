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
		// {url: 'ai', alt: 'Illustrator', skill: 'ai'},
		{url: 'js', alt: 'JavaScript', skill: 'js', eh:'eh', okay: 'okay', good: 'good', ninja: 'ninja'},
		{url: 'html5', alt: 'HTML', skill: 'htm'},
		{url: 'css3', alt: 'CSS', skill: 'css'},
		// {url: 'sass', alt: 'Sass', skill: 'sass'},
		{url: 'php', alt: 'PHP', skill: 'php'},
		// {url: 'jquery', alt: 'jQuery', skill: 'jquery'},
		{url: 'angular', alt: 'Angular', skill: 'angular'},
		{url: 'ps', alt:  'Photoshop', skill: ' ps'},
		{url: 'git', alt: 'Git', skill: 'git'}
	];
}]);

//My Work Section
app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.images = [
		{url: 'work-mybrailler.gif', alt: 'My Brailler', desc: 'Electronic Braille Typewriter', pos: 20},
		{url: 'work-email-builder.gif', alt: 'Email Builder', desc: 'Application: Email Build Tool', pos: 19},
		{url: 'work-french-formatter.gif', alt: 'French formatter', desc: 'Integration Helper Tool', pos: 18},
		{url: 'work-quebec3.gif', alt: 'Quebec3', desc: 'Blog: Quebec3', pos: 17},
		{url: 'work-countdown.gif', alt: 'Countdown timer', desc: 'Micro Widget', pos: 16}
		// {url: 'work-email.jpg', alt: 'email header design', desc: 'visual content: email', pos: 15},
		// {url: 'work-social.jpg', alt: 'visual content for social media', desc: 'visual content: social media', pos: 14},
		// {url: 'work-tshirt.jpg', alt: 'tshirt design', desc: 'vector: t-shirt design', pos: 13},
		// {url: 'work-musician.jpg', alt: 'website for a musician', desc: 'website development', pos: 12},
		// {url: 'work-coco.jpg', alt: 'logo design', desc: 'vector: logo design', pos: 11},
		// {url: 'work-icons.jpg', alt: 'vector icon design', desc: 'vector: icon design', pos: 10},
		// {url: 'work-vector.jpg', alt: 'vector character design', desc: 'vector: character design', pos: 9},
		// {url: 'work-larocque.jpg', alt: 'website design', desc: 'website development 2014', pos: 8},
		// {url: 'work-cafe.jpg', alt: 'website design', desc: 'website development 2013', pos: 7},
		// {url: 'work-logo-design.jpg', alt: 'logo design', desc: 'vector: logo design', pos: 6},
		// {url: 'work-logo-design2.jpg', alt: 'logo design', desc: 'business card design', pos: 5},
		// {url: 'work-infographic.jpg', alt: 'infographic design', desc: 'vector: infographic', pos: 4},
		// {url: 'work-printing.jpg', alt: 'printing design', desc: 'indesign: printing content', pos: 3},
		// {url: 'work-bookcover.jpg', alt: 'bookcover design', desc: 'bitmap: book cover design', pos: 2},
		// {url: 'work-poster.jpg', alt: 'poster design', desc: 'bitmap: movie poster recreation', pos: 1},
		// {url: 'work-tapestry.jpg', alt: 'vector tapestry', desc: 'vector: tapestry imitaion', pos: 0}
	];
}]);

app.controller('validateCtrl', ['$scope', function($scope) {
}]);

app.controller('timeCtrl', ['$scope', function($scope) {
	$scope.getDatetime = new Date();
}]);

var bigsrc = [];
bigsrc[20] = {
	url: 'pan-mybrailler.gif',
	id: 20,
	title: 'Electronic Braille Typewriter',
	desc: 'Braille typewriting practice website with Angular4',
	link: '//mybrailler.com'
},
bigsrc[19] = {
	url: 'pan-email-builder.jpg',
	id: 19,
	title: 'Email Builder3',
	desc: 'Email building tool with Angular4',
	link: ''
},
bigsrc[18] = {
	url: 'pan-french-formatter.gif',
	id: 18,
	title: 'French Formatter',
	desc: 'Non-braking space insertion tool with JavaScript',
	link: '//daishodesign.com/sites/formatter/'
},
bigsrc[17] = {
	url: 'pan-quebec3.jpg',
	id: 17,
	title: 'Quebec3',
	desc: 'CMS with Laravel',
	link: 'https://quebec3.com'
},
bigsrc[16] = {
	url: 'pan-countdown.gif',
	id: 16,
	title: 'Countdown Timer',
	desc: 'Micro widget with JavaScript',
	link: '//github.com/kdaisho/Countdown'
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