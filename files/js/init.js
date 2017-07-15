/*!
 * Description: © Multiclase, imagina, aprende y crea
 * Version: 1
 *
 * Author: Junior Jimenez(Server1567) - Front-End Developer
 * Author URL: https://server1567.herokuapp.com
 */
$(document).ready(function(){
	$('.slider').slider({
		indicators: false
	});

	// AutoTop al reload the website

	$("html, body").animate({ scrollTop: 0 }, 600);

	// Pushpin para poner la nav en el tope

	$('nav').pushpin({ 
		top: $('nav').offset().top 
	});

	// Efecto Parallax en las imágenes

	$('.parallax').parallax();

	// Botón Dropdown del NavBar

	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrainWidth: false,
		hover: true,
		gutter: 0,
		bellowOrigin: false,
		alignment: 'left',
		stopPropagation: false
	});

	// ScrollSpy del Boton "Let's go del WEB PRESENTATION"

	$('.scrollspy').scrollSpy({
		scrollOffset: 0
	});

	// MaterialBox para hacer efecto en las imágenes

	$('.materialboxed').materialbox();

	// Carousel para el TEAM

	$('.carousel').carousel();

	// Modal para los Términos

	$('.modal').modal();
	
});