// Check off specific To-dos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("checked");
});

//Click on X to delete To-do
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
});


//Listening for Enter key
$("input[type='text']").on("keypress", function(e){
  if(e.which === 13){
    //Grabing value from text input
    var todoText = $(this).val();
    $(this).val("");
    //Create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
