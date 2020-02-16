// start content

//function DocumentLinks(){

//	var list = '';

//	var enlace = document.querySelectorAll('a');

//	var myWindow = window.open('','','resizable=yes,scrollbars=yes,width=1000,height=800');
	
//	for( i=0; i<enlace.length; i++){
//		list += enlace[i].getAttribute('rel') + ' ' + enlace[i].href + '<br/>';
//	}

//	myWindow.document.body.innerHTML = list;

//}

//DocumentLinks();

function InsertIframe(){
	var pagina = document.querySelector('body');

	pagina.insertAdjacentHTML('afterend', '<iframe></iframe>');
}
InsertIframe();