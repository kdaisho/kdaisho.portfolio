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

/* ===== KOKOMADE YATTAZO !! ===== */
	//  var test = document.getElementById("test"),
	//   test_dest = document.getElementById("test_dest");
	//  test.addEventListener("click", function() {
	// console.log("nav clicked news");
	// test_dest.scrollIntoView();
	//  }, false);

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
	// function jumpToElement(num) {
	// 	dest_links[num].scrollIntoView();
	// }
	// //Loop for assigning click events(jump to specific elements) to each nav button
	// for(var i = 0, len = links.length; i < len; i++) {
	// 	(function(n) {
	// 		links[i].addEventListener("click", function(){
	// 			dest_links[n].scrollIntoView();
	// 		}, false);
	// 	}(i));
	// }

	//


	// var links = document.getElementsByClassName("link");
	// for(var i = 0, len = links.length; i < len; i++) {
	//   // links[i].addEventListener("click", function(e) {
	//   //   e.preventDefault();
	//     console.log(links[i].getAttribute("href"));
	//     var hrefs = links[i].getAttribute("href");
	//   // });
	// }
	// console.log(hrefs);
	// function clickJump(hrefs[0]) {

	// }
	//element.scrollIntoView();
	// links.addEventListener("click", function(e) {
	//   e.preventDefault();
	//   var href = target.getAttribute("href");
	//   console.log(href);
	// });
	// $('.link').click(function(e) {
	//   e.preventDefault(); // disable the hyperlink
	//   var href = $(this).attr('href');
	//   href = href.replace('#', '');
	//   var togo = $('a[class="' + href + '"]');
	//   $('html,body').animate({
	// var test = document.getElementById("test");
	// console.log(test);
	// test.addEventListener("click", function() {
	//   test.scrollIntoView();
	// });
	// function jumpto(anchor){
	//   window.location.href = "#"+anchor;
	//   console.log("CCCLIKL");
	// }
	// var hash1 = gal_holder;
	// console.log(hash1);
	// (function scrollTo() {
	//   console.log(hash1);
	//   location.hash = "#" + hash1;
	//   console.log("see");
	//   console.log(hash1);

	// }());
	//scrollTo();

	/* ==== form validation ==== */
	document.getElementById("submit").addEventListener("click", function() {
		var error = false,
			// user = document.getElementById("user"),
			user = document.getElementById("user"),
			userValue = document.getElementById("user").value,
		// user = $('#user').val(),
			email = document.getElementById("email"),
			emailValue = document.getElementById("email").value,
			email = document.getElementById("message"),
			msgValue = document.getElementById("message").value;

		if (userValue.length < 2) {
			// $('#user').val('');
			user.value = "";
			// console.log($('#user').val('',''));
			user.setAttribute("placeholder", "please enter a valid name");
			// $('#user').attr('placeholder', 'please enter a valid name');
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
			// $('#email').val('', '');
			email.setAttribute("placeholder", "please enter a valid email");
			error = true;
		}

		if (error == false) {
			user.style.border = "none";
			// $('#user').attr('placeholder', '');
			user.setAttribute("placeholder", "");
			email.style.border = "none";
			email.setAttribute("placeholder", "");
		}

		/* === send to php === */
		// if (error == false) {
		// 	$.ajax({
		// 		url: 'igetEmail.php',
		// 		type: 'POST',
		// 		data: {
		// 			Name: userValue,
		// 			email: emailValue,
		// 			question: msgValue
		// 		},
		// 		success: function(response) {
		// 			$('#form').html(response);
		// 		}
		// 	});
		// }

		// Ajax object
		// if (window.XMLHttpRequest) {
		// 	console.log("haha " + XMLHttpRequest);
		// 	var request = new XMLHttpRequest();
		// }
		// // Build request
		// var url = "igetEmail.php";
		// httpRequest.open("POST", url, true);
		// httpRequest.onreadystatechange = getData;
		// httpRequest.send();

		// function getData() {
		// 	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
		// 		console.log('aaa');
		// 	}
		// }
		// getData();

		var myObject = {
			Name: userValue,
			email: emailValue,
			question: msgValue
		};

		var str_json = JSON.stringify(myObject);
		console.log(str_json);

		var request = new XMLHttpRequest();
		request.open("POST", "igetEmail.php", true);
		request.setRequestHeader("Content-type", "application/json");
		request.send(str_json);

		request.onload = function() {
			if (request.readyState != 4 || request.status != 200) {
				return;
			}
			else {
				// alert(request.responseText);
				console.log(request.responseText);
				document.getElementById("form").innerHTML = request.responseText;
			}
		};

	});
});




























