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
		{url: 'js', alt: 'JavaScript', skill: 'js', eh:'eh', okay: 'okay', good: 'good', ninja: 'ninja'},
		{url: 'html5', alt: 'HTML', skill: 'htm'},
		{url: 'css3', alt: 'CSS', skill: 'css'},
		{url: 'php', alt: 'PHP', skill: 'php'},
		{url: 'angular', alt: 'Angular', skill: 'angular'},
		{url: 'ps', alt:  'Photoshop', skill: ' ps'},
		{url: 'git', alt: 'Git', skill: 'git'},
		{url: 'nginx', alt: 'Nginx', skill: 'nginx'}
	];
}]);

//My Work Section
app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.images = [
		{url: 'work-stashash.jpg', alt: 'StasHash', title: 'StasHash', desc: 'Private Hash Generator', pos: 9},
		{url: 'work-pipe-game.jpg', alt: 'Pipe game', title: 'Pipe Game', desc: 'Super Casual Game', pos: 8},
		{url: 'work-canvas-game-phaser.jpg', alt: 'Breakout Game with Phaser2', title: 'Canvas Game', desc: 'Breakout with Phaser', pos: 7},
		{url: 'work-canvas-game.jpg', alt: 'Breakout Game', title: 'Canvas Game', desc: 'Breakout', pos: 6},
		{url: 'work-mybrailler.gif', alt: 'My Brailler', title: 'Application', desc: 'Electronic Brailler', pos: 5},
		{url: 'work-email-builder.gif', alt: 'Email Builder', title: 'Application', desc: 'Email Builder', pos: 4},
		{url: 'work-french-formatter.gif', alt: 'French formatter', title: 'Helper Tool', desc: 'Non-Braking Injector', pos: 3},
		{url: 'work-quebec3.gif', alt: 'Quebec3', title: 'CMS', desc: 'Blogging Platform', pos: 2},
		{url: 'work-countdown.gif', alt: 'Countdown timer', title: 'Micro Widget', desc: 'Countdown Timer', pos: 1},
		{url: 'work-navy-css-grid.jpg', alt: 'Navy CSS Grid', title: 'CSS Grid', desc: 'Navy Vessels', pos: 0}
	];
}]);

app.controller('validateCtrl', ['$scope', function($scope) {
}]);

app.controller('timeCtrl', ['$scope', function($scope) {
	$scope.getDatetime = new Date();
}]);

var bigsrc = [];
bigsrc[9] = {
	url: 'pan-stashash.jpg',
	id: 9,
	title: 'StasHash',
	desc: 'Private Hash Generator',
	link: '//daishodesign.com/sites/stashash/'
}
bigsrc[8] = {
	url: 'pan-pipe-game.jpg',
	id: 8,
	title: 'Super Casual Game',
	desc: 'Do not judge',
	link: '//daishodesign.com/sites/running-pipe/'
}
bigsrc[7] = {
	url: 'pan-canvas-game-phaser.jpg',
	id: 7,
	title: 'HTML Canvas Game',
	desc: 'HTML Canvas Game with Phaser2',
	link: '//daishodesign.com/sites/breakout-phaser/'
}
bigsrc[6] = {
	url: 'pan-canvas-game.jpg',
	id: 6,
	title: 'HTML Canvas Game',
	desc: 'HTML Canvas Game with Pure JavaScript',
	link: '//daishodesign.com/sites/breakout/'
}
bigsrc[5] = {
	url: 'pan-mybrailler.gif',
	id: 5,
	title: 'My Brailler',
	desc: 'Braille typewriting practice site with Angular4',
	link: '//mybrailler.com'
},
bigsrc[4] = {
	url: 'pan-email-builder.jpg',
	id: 4,
	title: 'Email Builder3',
	desc: 'Email building tool with Angular4',
	link: ''
},
bigsrc[3] = {
	url: 'pan-french-formatter.gif',
	id: 3,
	title: 'French Formatter',
	desc: 'Non-braking space injector tool with JavaScript',
	link: '//daishodesign.com/sites/formatter/'
},
bigsrc[2] = {
	url: 'pan-quebec3.jpg',
	id: 2,
	title: 'Quebec3',
	desc: 'CMS with Laravel',
	link: 'https://quebec3.com'
},
bigsrc[1] = {
	url: 'pan-countdown.gif',
	id: 1,
	title: 'Countdown Timer',
	desc: 'Micro widget with JavaScript',
	link: '//github.com/kdaisho/Countdown'
},
bigsrc[0] = {
	url: 'pan-navy-css-grid.jpg',
	id: 0,
	title: 'Royal Canadian Navy Vessels',
	desc: 'Navy vessels catalog using CSS&nbsp;grid',
	link: '//daishodesign.com/sites/navy/'
}