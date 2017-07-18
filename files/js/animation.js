/*!
 * Description: © Multiclase, imagina, aprende y crea
 * Version: 1
 *
 * Author: Junior Jimenez(Server1567) - Front-End Developer
 * Author URL: https://server1567.herokuapp.com
 */

window.onload = function(){
	window.setTimeout(function(){
		var scroll = document.getElementById("bodyScroll");
		scroll.setAttribute("class", "no_scroll");
	}, 1000);
}

// Función para fijar la NavBar en la Parte Top

function fix_navBar(){

	var navBar = document.getElementById("magic");
	window.setTimeout(function() {
		navBar.setAttribute("class", "navbar-fixed");

		var imgPresentation = document.getElementById("imgPresentationID");
		imgPresentation.setAttribute("class", "slides hide");
		window.scrollTo(0, 0);

		// Not allow Scroll at the Screen
		var scroll = document.getElementById("bodyScroll");
		scroll.removeAttribute("class");
	}, 1000);
}

// No sirve el botón Enviar

function send_error(time) {
	Materialize.toast('Espera aún, todavía no tiene Back-End la Plataforma', time, 'rounded');
}