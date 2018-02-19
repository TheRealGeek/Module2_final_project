// alert("testing");
$(document).ready(function(){
$( "#linkedIn" ).hover(
  function()
  {
    $( this ).css("height","2em");
    $( this ).css("width","2em");
  }, function()
  {
    $( this ).css( "height","1em" );
    $( this ).css( "width","1em" );
  })
});

$(document).ready(function(){
$( "#gitHub" ).hover(
  function() {
    $( this ).css("height","2em");
    $( this ).css("width","2em");
  }, function() {
    $( this ).css( "height","1em" );
    $( this ).css( "width","1em" );
  })
});

$("#linkedIn").hover(function(){
  $(this.linkedIn).onmouseout({
      
      height: '+=1em',
      width: '+=1em'
  });
}); 