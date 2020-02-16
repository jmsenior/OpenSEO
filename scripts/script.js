// ***********start content*************

// obtener listado general de enlaces

function DocumentLinks(){

	var list = '';

	var enlace = document.querySelectorAll('a');

	var myWindow = window.open('','','resizable=yes,scrollbars=yes,width=1000,height=800');
	
	for( i=0; i<enlace.length; i++){

		if( enlace[i].getAttribute('rel') == null ) {

			list += '<p><span style="background:green;color:white;padding: 2px 5px;border-radius:10px;text-transform:uppercase;font-weight:bold">DOFOLLOW</span>' + enlace[i].href + '</p><br/>';

		}else if(enlace[i].getAttribute('rel') == 'nofollow'){

			list += '<p><span style="background:blue;color:white;padding: 2px 5px;border-radius:10px;text-transform:uppercase;font-weight:bold">' + enlace[i].getAttribute('rel') + '</span>' + ' ' + enlace[i].href + '</p><br/>';

		}else{

			list += '<p><span style="background:black;color:white;padding: 2px 5px;border-radius:10px;text-transform:uppercase;font-weight:bold">' + enlace[i].getAttribute('rel') + '</span>' + ' ' + enlace[i].href + '</p><br/>';

		}
	}

	//console.log(enlace.length);

	myWindow.document.body.innerHTML = list;

}
insertarContenido();

// insertar html

function insertarContenido(){
	var pagina = document.querySelector('body');

	pagina.insertAdjacentHTML('afterend', '<div id="frame-content"></div>');


	chrome.extension.sendMessage({

		type: "getBloque"

	});

	chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
	    if (request.content){
	    	$('#frame-content').html(request.content);
			$('.numero-links').html(document.querySelectorAll('a').length);
	    }
	});
}




// boton de mostrar enlaces
$(document).ready(function(){


	$('.btn-show-links').click(function(){
		DocumentLinks();
	});

});