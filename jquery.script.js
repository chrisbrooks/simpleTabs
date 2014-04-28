(function ($) {

"use strict";

$('.tabs > ul li a').on('click', function() {
	    var that = $(this),
	    tabs = that.closest('.tabs'), 
	    target = $.trim(that.attr('href').substring(1)), 
	    items = tabs.find('ul li');
	    window.location.hash = target;
	    items.removeClass('selected').find('a[href="#' + target + '"]').parent().addClass('selected');
	    tabs.find('.tab').show();
	    tabs.find('.tab:not(".' + target + '")').hide();
	    return false;
	});

	function tabWidth() {
	    var widthing = ($('.container').width() / $('body').width() * 100 / 3) - 5 + '%';
	    var widthingLast = ($('.container').width() / $('body').width() * 100 / 3) - 4 + '%';
	    $('.tabs ul li').width(widthing);
	    $('.tabs ul li:last').width(widthingLast);
	}

	function windowHash() {
	    var target = window.location.hash.substring(1),
	        tabs = $('.tabs');
	    if (target !== "") {
	        console.log(target);
	        tabs.find('ul li').removeClass('selected');
	        tabs.find('a[href="#' + target + '"]').parent().addClass('selected');
	        tabs.find('.tab').show();
	        tabs.find('.tab:not(".' + target + '")').hide();
	    }
	}
	
	$(document).ready(function() {
	    tabWidth();
	    windowHash();
	});

}(jQuery));