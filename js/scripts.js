var i = 0;
$(function () {
  $("form.addressForm").submit(function(event) {
    event.preventDefault();
    var fullName = $("#firstName").val() + " " + $("#lastName").val();
    i+=1;
    var extraInfo = '<div id="person' + i + '"><p>Phone: ' + $("#phone").val() +'</p><p>Email: ' + $("#email").val() + '</p><p>Address: ' + $("#address").val() + '</p></div>';

    $("#contactList").append('<li id="contact' + i + '">'+fullName+'</li>');
    $("#contactList").append(extraInfo);
    $("#contactList").children().last().hide();
    $(".contactList").show();
    var j = i;
    $("#contact" + i).click(function() {
      $("#person" + j).toggle();
    })
  });
});
