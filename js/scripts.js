$(document).ready(function() {

  $('#blanks form').submit(function(event) {

  var noun1Input = $("input#noun1").val();

  var gerundInput = $("input#gerund").val();

  var locationInput = $("input#location").val();

  var verbInput = $("input#verb").val();

  var pluralnounInput = $("input#pluralnoun").val();

  $('.pluralnoun').text(pluralnounInput);

  $('.verb').text(verbInput);

  $('.noun1').text(noun1Input);

  $('.gerund').text(gerundInput);

  $('.location').text(locationInput);

  $('#story').show();

  event.preventDefault();

  });

});
