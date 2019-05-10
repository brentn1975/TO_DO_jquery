$(document).ready(
  function(){
    $('#button').click(
      function(){
        var toAdd = $('input[name=ListItem]').val();
        $('ol').append('<li>' + toAdd + '</li>');
      });


$("input[name=ListItem]").keyup(function(event){
  if(event.keyCode == 13){
    $("#button").click();
  }
});

$(document).on('dblclick', 'li', function(){
  $(this).toggleClass('strike').fadeout('slow');
});

$('input').focus(function(){
  $(this).val('');
});

// $('ol').sortable();

  }
);
