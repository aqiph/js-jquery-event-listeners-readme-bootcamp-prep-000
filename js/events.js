//getIt
function getIt(){
  $('p').on('click',function(event){alert('Hey!');})
}

//frameIt
$('img').attr('style', '.tasty');
function frameIt(){
  $('img').on('load', function(event){
//    $('img').attr('style', );
  })
}

$(document).ready(function(){
  getIt();
  frameIt();

});
