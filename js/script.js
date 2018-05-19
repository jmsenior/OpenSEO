

var recolectar =  [];

function buscar(){

  var url = $('#buscador').val();

  $('#visor').load(url,function(){

    $(this).find('a').each(function(){
      console.log($(this));

    });

  });



}
