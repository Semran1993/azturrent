



AOS.init({
  duration: 1200,
})




/* nev menu*/
  $("#toggle").click(function(){
    $("nav #menu li ").toggleClass("main");

  });




window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");

  }
}


/* header slide */

var swiper = new Swiper(" header .headerSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* section rentacar car filter:  */

$('.box-filters #filtersbtn').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: true
    },
    600: {
      items: 5,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
});

$('.container .filterDiv').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    770: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
});


$('.car-catalog .filterDiv').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    700: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      loop: false
    }
  }
});





/* about-galary */




$('.about-galary .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    },
    1300: {
      items: 4,
      nav: true,
      loop: false
    }
  }
});


/* Comment  */


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
});



/**
 *
 *#partner 
 *
 */



$('.partner .partner-box .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 6,
      nav: true,
      loop: false
    }
  }
});


/* cars filter button */



$("#toggle-filter").click(function(){
  $(".cars .car-filter form ").toggleClass("main");

});

$(".turs-search #toggle-filter").click(function(){
  $(".turs-search .contanier-search .checkbox  ").toggleClass("main");

});


$(window).scroll(function(){
  if($(this).scrollTop()<800){
    $('#goupstairs').fadeOut();
  }
  else{
    $('#goupstairs').fadeIn();

  }
});
/* goupstairs */
$('#goupstairs').on('click', function(){
  $('html, body').animate({scrollTop:0},'slow');
});



/* section rentacar car filter:  */
filterSelection("spor")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filtersbtn");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activee");
    current[0].className = current[0].className.replace(" activee", "");
    this.className += " activee";
  });

}


