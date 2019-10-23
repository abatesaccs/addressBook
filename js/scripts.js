$(function () {
  $("form.addressForm").submit(function(event) {
    event.preventDefault();
    var fullName = $("#firstName").val() + " " + $("#lastName").val();
    $("#contactList").append('<li>'+fullName+'</li>');
    $("#phone").text();
    $("#email").text();
    $("#address").text();
    // $(".addressForm").hide();
    $(".contactList").show();
  });
});
