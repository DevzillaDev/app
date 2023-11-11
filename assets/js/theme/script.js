/**
 * Matrix JS File
 *
 * @package     Matrix
 * @author      OsamaBakri
 * @version     1.0.0
**/

(function ($) {

  'use strict';

  // :: User menu
  $('#user-btn').on('click', function () {
    $('#user-menu').toggleClass('active');
  });
  // :: Hide (#user-menu) when clicking outside
  $(document).mouseup(function (e) {
    const userMenu = $("#user-menu");
    if (!userMenu.is(e.target) && userMenu.has(e.target).length === 0) { userMenu.removeClass('active'); }
  });
  $('.prevent-default').on('click', function(e) {
    e.preventDefault();
  });
  /* --------------------------------------------------------------------- */

  // :: Sidebar
  $('#sidebar-btn').on('click', function () {
    $('#main').toggleClass('sidebar-active');
    $('.has-sub-menu-l1').removeClass('open-menu');
  });

  // :: Sidebar menus
  $('.has-sub-menu-l1 > a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
    // $(this).parent().find('.sub-menu-l1').slideToggle();
    $(this).parent().siblings().removeClass('open-menu');
  });
  /* --------------------------------------------------------------------- */

  // :: Modal
  $('[data-toggle="modal"]').on('click', function() {
    var modalData = $(this).attr('data-target');
    $(modalData).fadeIn();
  });
  $('[data-close="modal"]').on('click', function() {
    var modalData = $(this).attr('data-target');
    $(modalData).fadeOut();
  });
  /* --------------------------------------------------------------------- */


}(jQuery));
