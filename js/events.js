//getIt
function getIt(){
  $('p').on('click',function(event){alert('Hey!');})
}

//frameIt
function frameIt(){
  $('img').on('load', function(event){
    $('img').attr('class', 'tasty');
  })
}

//pressIt
function pressIt(){
  $('input').on('keydown')
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
