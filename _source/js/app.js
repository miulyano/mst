var production = $(".production");


//открытие мобильного меню
$(function() {
  $(".menu-button").click(function(e) {
    //e.preventDefault();
    $(".header__nav").addClass('menu-active');
    $("body").addClass('body-hidden');
    $(".owl-carousel").css('z-index', '-1');
  })
});

//закрытие мобильного меню
$(function() {
  $(".close-button").click(function(e) {
    //e.preventDefault();
    $(".header__nav").removeClass('menu-active');
    $("body").removeClass('body-hidden');
    $(".owl-carousel").css('z-index', '1');
  })
});

$(function() {
    production.click(function(e) {
    //e.preventDefault();
    $(this).find(".header__nav_category-list").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function($){
  $(document).mouseup(function (e){
    var menu = $(".header__nav_category-list");
    if (!menu.is(e.target)
      && menu.has(e.target).length === 0) {
      menu.removeAttr( 'style' ).css('display', 'none');
    }
  });
});

$(function() {
  $(".arrow-back").focus(function(e) {
    e.preventDefault();
    $(".header__nav_category-list").css('display', 'none');
    console.log('hi')
  })
});

$(function() {
  $(".list__label").click(function(e) {
    //e.preventDefault();
    $(this).find(".list__label_block").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function($){
  $(document).mouseup(function (e){
    var menu = $(".list__label_block");
    if (!menu.is(e.target)
      && menu.has(e.target).length === 0) {
      menu.removeAttr( 'style' ).css('display', 'none');
    }
  });
});

$(function() {
  $(".sub__arrow-back").focus(function(e) {
    e.preventDefault();
    $(".list__label_block").css('display', 'none');
    console.log('hi')
  })
});

$(function() {
  $(".list__sub-label").click(function(e) {
    //e.preventDefault();
    $(this).find(".list__label_sub-block").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function($){
  $(document).mouseup(function (e){
    var menu = $(".list__label_sub-block");
    if (!menu.is(e.target)
      && menu.has(e.target).length === 0) {
      menu.removeAttr( 'style' ).css('display', 'none');
    }
  });
});

$(function() {
  $(".sub-item__arrow-back").focus(function(e) {
    e.preventDefault();
    $(".list__label_sub-block").css('display', 'none');
    console.log('hi')
  })
});

//Подключение карусели
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  autoplayTimeout:10000,
  autoplayHoverPause:false,
  responsive: {
    0: {
      items: 1
    }
  }
});
