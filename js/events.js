//getIt
function getIt(){
  $('p').on('click',function(event){alert('Hey!');})
}

//frameIt
function frameIt(){
  $('img').on('load', function(event){
    $('img').attr('style', {border-width: 5px; border-color: red;
  border-style: solid;});
  })
}

$(document).ready(function(){
  getIt();
  frameIt();

});
