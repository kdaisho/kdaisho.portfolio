"use strict";

// $(document).ready(function() {

document.addEventListener("DOMContentLoaded", function() {

  var windowsize;
  var scrl_amount;

  var main_menu = document.getElementById("main-menu");
  var nav = document.getElementById("nav");
  var close_nav = document.getElementById("close-nav");
  // var wrap_thumb = document.getElementsByClassName("wrap-thumb");
  // var wrap_thumb = document.querySelectorAll(".wrap-thumb");

  //* Add the same listener for multiple different events on the same element
  //* Trying to make the same function as element.on("load, resize, scroll", function(){...}); in jQuery
  function addListenerMulti(el, s, fn) {
    var events = s.split(" ");
    for (var i = 0; i < events.length; i++) {
      el.addEventListener(events[i], fn, false);
    }
  }
  //* Then excute it
  addListenerMulti(window, "load resize scroll", function() {
    windowsize = window.innerWidth;
    scrl_amount = window.pageYOffset;

    if((scrl_amount > 199) || (windowsize < 768)) {
      $('#site_logo').addClass('mini-logo');
      $('#alt_logo').addClass('mini-alt-logo');
    }
    else {
      $('#site_logo').removeClass('mini-logo');
      $('#alt_logo').removeClass('mini-alt-logo');
    }
  });

  main_menu.addEventListener("click", function() {
    nav.style.right = 0;
  });

  close_nav.addEventListener("click", function() {
    nav.style.right = "-320px";
  });




/* ==== MY WORK section ==== */
  var thumbs_parent = document.getElementById("wrap-thumbs");
  thumbs_parent.addEventListener("click", displayWork, false);

  function displayWork(event) {
    if (event.target !== event.currentTarget) {
      var pos = event.target.getAttribute("data-pos");
      console.log("Hello " + pos);
      // var pos = clicked_item.getAttribute("class");
      // $('#img_holder').html('<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">');
      document.getElementById("img_holder").innerHTML = '<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">';
      document.getElementById("desc_holder").innerHTML = '<h4>' + bigsrc[pos].title + '</h4><p>' + bigsrc[pos].desc + '</p>';

      
      $('#img_holder, #desc_holder, #modal_bg, #close_btn, #prev, #next').fadeIn();

      if(pos == 18 || pos == 12 || pos == 8) {
        $('#desc_holder').append('<a href="' + bigsrc[pos].link + '" target="_blank">visit website</a>');
      }
      if(pos == (bigsrc.length-1)) {
        $('#next').data('pos',(pos-1));
        $('#prev').data('pos',0);
      }
      else if(pos == 0) {
        $('#next').data('pos',(bigsrc.length-1));
        $('#prev').data('pos',(pos+1));
      }
      else {
        $('#next').data('pos',(pos-1));
        $('#prev').data('pos',(pos+1));
      }
    }
    event.stopPropagation();
  }

  // This should be ditched
  // $('.wrap-thumb').click(function() {
  //   var pos = $(this).data('pos');
  //   $('#img_holder').html('<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">');
  //   $('#desc_holder').html('<h4>' + bigsrc[pos].title + '</h4><p>' + bigsrc[pos].desc
  //     + '</p>');
  //   $('#img_holder, #desc_holder, #modal_bg, #close_btn, #prev, #next').fadeIn();

  //   if(pos == 18 || pos == 12 || pos == 8) {
  //     $('#desc_holder').append('<a href="' + bigsrc[pos].link + '" target="_blank">visit website</a>');
  //   }
  //   if(pos == (bigsrc.length-1)) {
  //     $('#next').data('pos',(pos-1));
  //     $('#prev').data('pos',0);
  //   }
  //   else if(pos == 0) {
  //     $('#next').data('pos',(bigsrc.length-1));
  //     $('#prev').data('pos',(pos+1));
  //   }
  //   else {
  //     $('#next').data('pos',(pos-1));
  //     $('#prev').data('pos',(pos+1));
  //   }
  // });

  $('.arrow').click(function() {
    var pos = $(this).data("pos");
    $('#img_holder').html('<img src="images/'+ bigsrc[pos].url +'" data-id="'+ bigsrc[pos].id +'">');
    $('#desc_holder').html('<h4>' + bigsrc[pos].title + '</h4><p>' + bigsrc[pos].desc
      + '</p>');
    $('#img_holder, #desc_holder, #modal_bg, #close_btn, #prev, #next').fadeIn();

    if(pos == 18 || pos == 12 || pos == 8) {
      $('#desc_holder').append('<a href="' + bigsrc[pos].link + '" target="_blank">visit website</a>');
    }
    if(pos == (bigsrc.length-1)) {
      $('#next').data('pos',(pos-1));
      $('#prev').data('pos',0);
    } else if(pos == 0) {
      $('#next').data('pos',(bigsrc.length-1));
      $('#prev').data('pos',(pos+1));
    } else {
      $('#next').data('pos',(pos-1));
      $('#prev').data('pos',(pos+1));
    }
  });

  $('#modal_bg, #close_btn').click(function() {
    $('#img_holder, #desc_holder, #close_btn, #modal_bg, #prev, #next').fadeOut();
  });

  $('.link').click(function(e) {
    e.preventDefault(); // disable the hyperlink
    var href = $(this).attr('href');
    href = href.replace('#','');
    var togo = $('a[class="' + href + '"]');
    $('html,body').animate({
      scrollTop:togo.offset().top
    },300)
  });

  /* ==== form validation ==== */
  $('#submit').click(function() {
    var error = false;
    var user = $('#user').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(user.length < 2) {
      $('#user').val('','');
      $('#user').attr('placeholder','please enter a valid name');
      error = true;
    };

    function validateEmail(em) {
      var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]/; // allows any email without extension (e.g. .ca)
      if(filter.test(email)) {
        return true;
      }
      else {
        return false;
      }
    }

    if(validateEmail(email) == false) {
      $('#email').val('','');
      $('#email').attr('placeholder','please enter a valid email');
      error = true;
    };

    if(error == false) {
      $('#user').css('border','none');
      $('#user').attr('placeholder','');
      $('#email').css('border','none');
      $('#email').attr('placeholder','');
    };

    /* === send to php === */
    if(error == false) {
      $.ajax({
        url:'igetEmail.php',
        type:'POST',
        data:{
          Name:user,
          email:email,
          question:message
        },
        success:function(response){
          $('#form').html(response);
        }
      });
    }
  });
});