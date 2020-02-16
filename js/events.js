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
  $('form'.children).on('keydown', (event)=>{
    if (event.key === 'G'){
      alert('G is pressed!')
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
