//открытие мобильного меню
$(function() {
  $(".menu-button").click(function() {
    $(".header__nav").addClass('menu-active');
    $("body").addClass('body-hidden');
    $(".owl-carousel").css('z-index', '-1');
    $(".main__breadcrumbs_block").css('z-index', '-1');
  })
});

//закрытие мобильного меню
$(function() {
  $(".menu__close").click(function() {
    $(".header__nav").removeClass('menu-active');
    $("body").removeClass('body-hidden');
    $(".owl-carousel").css('z-index', '1');
    $(".main__breadcrumbs_block").css('z-index', '1');
  })
});

//логика подменю для мобил
$(function() {
    $(".main-label").click(function() {
    $(this).parent().find(".header__nav_firm-list").removeAttr( 'style' ).css('display', 'block');
  })
});

$(function() {
  $(".firm-label").click(function() {
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
  $(".sub-label").click(function() {
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
  $(".header__info_action-button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".header__slider button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".main__contacts_block-button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".footer__info_button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".consultation-button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $(".main__services_item-button").click(function() {
    $(".modal__form").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

//открытие модалок с сертификатами
$(function() {
  $("#certificates-1").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-1").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $("#certificates-2").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-2").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $("#certificates-3").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-3").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

$(function() {
  $("#certificates-4").click(function(e) {
    e.preventDefault();
    $("#modal__certificates-4").addClass('modal-active');
    $("body").addClass('body-hidden');
    $("#name").focus();
  })
});

//Закрытие модалки
$(function() {
  $(".modal__block_close").click(function() {
    $(".modal__form").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__overlay").click(function() {
    $(".modal__form").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

//закрытие модалок с сертификатами
$(function() {
  $(".modal__overlay").click(function() {
    $("#modal__certificates-1").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__overlay").click(function() {
    $("#modal__certificates-2").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__overlay").click(function() {
    $("#modal__certificates-3").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__overlay").click(function() {
    $("#modal__certificates-4").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__block_close").click(function() {
    $("#modal__certificates-1").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__block_close").click(function() {
    $("#modal__certificates-2").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__block_close").click(function() {
    $("#modal__certificates-3").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(function() {
  $(".modal__block_close").click(function() {
    $("#modal__certificates-4").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  })
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $(".modal__form").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $("#modal__certificates-1").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $("#modal__certificates-2").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $("#modal__certificates-3").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    $("#modal__certificates-4").removeClass('modal-active');
    $("body").removeClass('body-hidden');
  }
});

//маска телефона
$(function() {
    $("#tel__modal").mask("+7(999) 999-99-99");
    $("#tel__news-item").mask("+7(999) 999-99-99");
});