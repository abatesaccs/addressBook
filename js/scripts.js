// Business logic for AddressBook ------------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i=0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business logic for Contacts ------------------
function Contact(firstName, lastName, phoneNumber, emails, workAddress, homeAddress) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.emails = emails,
  this.workAddress = workAddress,
  this.homeAddress = homeAddress
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface logic
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".emails").html(contact.emails.join(", "));
  $(".work-address").html(contact.workAddress);
  $(".home-address").html(contact.homeAddress);

  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
};

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function(){
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(function() {
  attachContactListeners();
  var emailCounter = 1;

  $("button#add-new-email").click(function(){
    if (emailCounter < 4) {
      emailCounter += 1;
      $("#new-email" + emailCounter).show();
    }
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();
    var inputtedPhoneNumber = $("#new-phone-number").val();

    var inputtedEmails = [];
    for (var i=1; i <= 4; i++) {
      var inputtedEmail = $("#new-email" + i).val();
      if (inputtedEmail !== "") {
        inputtedEmails.push(inputtedEmail);
      }
    }

    var inputtedWorkAddress = $("#new-work-address").val();
    var inputtedHomeAddress = $("#new-home-address").val();

    //resetting fields
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    for (var i=1; i <= 4; i++) {
      $("input#new-email" + i).val("");
    }
    emailCounter = 1;
    $(".additionalEmail").hide();

    $("input#new-work-address").val("");
    $("input#new-home-address").val("");

    var newContact = new Contact (inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmails, inputtedWorkAddress, inputtedHomeAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
     console.log(addressBook);
  });
})
