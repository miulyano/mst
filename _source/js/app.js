//открытие мобильного меню
$(function() {
  $(".menu-button").click(function(e) {
    //e.preventDefault();
    $(".header__nav").addClass('menu-active');
    $("body").addClass('body-hidden');
    $(".owl-carousel").css('z-index', '-1');
    $(".main__breadcrumbs_block").css('z-index', '-1');
  })
});

//закрытие мобильного меню
$(function() {
  $(".menu__close").click(function(e) {
    //e.preventDefault();
    $(".header__nav").removeClass('menu-active');
    $("body").removeClass('body-hidden');
    $(".owl-carousel").css('z-index', '1');
    $(".main__breadcrumbs_block").css('z-index', '1');
  })
});

//логика подменю для мобил
$(function() {
    $(".main-label").click(function(e) {
    //e.preventDefault();
    $(this).parent().find(".header__nav_firm-list").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function() {
  $(".firm-label").click(function(e) {
    //e.preventDefault();
    $(this).parent().find(".header__nav_category-list").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function($){
  $(document).mouseup(function (e){
    var menu = $(".header__nav_firm-list");
    if (!menu.is(e.target)
      && menu.has(e.target).length === 0) {
      menu.removeAttr( 'style' ).css('display', 'none');
    }
  });
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
  $(".arrow__firm-back").click(function(e) {
    e.preventDefault();
    $(this).closest(".header__nav_firm-list").css('display', 'none');
    console.log('hi')
  })
});

$(function() {
  $(".arrow-back").click(function(e) {
    e.preventDefault();
    $(this).closest(".header__nav_category-list").css('display', 'none');
    console.log('hi')
  })
});

$(function() {
  $(".label").click(function(e) {
    //e.preventDefault();
    $(this).parent().find(".list__label_block").removeAttr( 'style' ).css('display', 'block');
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
  $(".sub__arrow-back").click(function(e) {
    e.preventDefault();
    $(this).closest(".list__label_block").css('display', 'none');
    console.log('hi')
  })
});

$(function() {
  $(".sub-label").click(function(e) {
    //e.preventDefault();
    $(this).parent().find(".list__label_sub-block").removeAttr( 'style' ).css('display', 'block');
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
  $(".sub-item__arrow-back").click(function(e) {
    e.preventDefault();
    $(this).closest(".list__label_sub-block").css('display', 'none');
    console.log('hi')
  })
});

//Открытие модалки
$(function() {
  $(".header__info_action-button").click(function(e) {
    //e.preventDefault();
    $(".modal").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".header__slider button").click(function(e) {
    //e.preventDefault();
    $(".modal").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".main__contacts_block-button").click(function(e) {
    //e.preventDefault();
    $(".modal").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".footer__info_button").click(function(e) {
    //e.preventDefault();
    $(".modal").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".main__services_item-button").click(function(e) {
    //e.preventDefault();
    $(".modal").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

//Закрытие модалки
$(function() {
  $(".modal__block_close").click(function(e) {
    //e.preventDefault();
    $(".modal").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__overlay").click(function(e) {
    //e.preventDefault();
    $(".modal").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $(".modal").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});
