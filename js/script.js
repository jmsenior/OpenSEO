


// $(document).ready(function(){
//   $('#buscador').on('change',function(){
//     console.log($(this).val());
//   });
// });

function buscar(){

  var url = $('#buscador').val();

  $.get(url,function(data){

    console.log(data);
  });



};
