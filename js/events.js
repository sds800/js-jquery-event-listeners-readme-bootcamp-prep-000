//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  // $('img').on('load', function () {
    $('img').addClass('tasty')

// })
}

function pressIt(){
$('#typing').on('keydown', function () {
  if ('e.which' === 71){
    alert('')

  }

})
}

function submitIt() {

}
$(document).ready(function(){

// call functions here
getIt();

frameIt();

pressIt()
});
