//getIt
function getIt(){
  $('p').on('click',function(event){alert('Hey!');})
}

//frameIt
$('img').attr('class', 'tasty');
function frameIt(){
  $('img').on('load', function(event){
    $('img').attr('class', 'tasty');
  })
}

$(document).ready(function(){
  getIt();
  frameIt();

});
