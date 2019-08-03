var qweasd = $(window).height();
var ds1 = $('.ds1'), ds2 = $('.ds2'), contactsMe =  $('#contacts'), footerMe = $('#footer'), resumeMe = $('#resume'), imgMe = $('.isotope-item'), aboutMe = $('#about');

$('.brand-img-white').addClass('animated tada');

$(window).scroll(function() {
	if($(window).scrollTop() + qweasd >= aboutMe.offset().top) {
    $('#about').addClass('animated fadeInLeft'); //выполняем действия если элемент виден
  }else {
  	$('#about').removeClass('animated fadeInLeft');
  };
	if($(window).scrollTop() + qweasd >= ds1.offset().top) {
    $('.ds1').addClass('animated bounceInLeft'); //выполняем действия если элемент виден
  }else {
  	$('.ds1').removeClass('animated bounceInLeft');
  };
  if($(window).scrollTop() + qweasd >= ds2.offset().top) {
    $('.ds2').addClass('animated bounceInLeft'); //выполняем действия если элемент виден
  }else {
  	$('.ds2').removeClass('animated bounceInLeft');
  };
  if($(window).scrollTop() + qweasd >= contactsMe.offset().top) {
    $('#contacts').addClass('animated fadeInDown'); //выполняем действия если элемент виден
  }else {
  	$('#contacts').removeClass('animated fadeInDown');
  };
  if($(window).scrollTop() + qweasd >= footerMe.offset().top) {
    $('#footer').addClass('animated fadeInLeft'); //выполняем действия если элемент виден
  }else {
  	$('#footer').removeClass('animated fadeInLeft');
  };
  if($(window).scrollTop() + qweasd >= resumeMe.offset().top) {
    $('#resume').addClass('animated fadeInDown'); //выполняем действия если элемент виден
  }else {
  	$('#resume').removeClass('animated fadeInDown');
  };
    if($(window).scrollTop() + qweasd >= imgMe.offset().top) {
    $('.isotope-item').addClass('animated rotateInUpLeft'); //выполняем действия если элемент виден
  }else {
  	$('.isotope-item').removeClass('animated rotateInUpLeft');
  };
});