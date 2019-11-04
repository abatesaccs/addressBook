// var i = 0;
// $(function () {
//   $("form.addressForm").submit(function(event) {
//     event.preventDefault();
//     var fullName = $("#firstName").val() + " " + $("#lastName").val();
//     i+=1;
//     var extraInfo = '<div id="person' + i + '"><p>Phone: ' + $("#phone").val() +'</p><p>Email: ' + $("#email").val() + '</p><p>Address: ' + $("#address").val() + '</p></div>';

//     $("#contactList").append('<li id="contact' + i + '">'+fullName+'</li>');
//     $("#contactList").append(extraInfo);
//     $("#contactList").children().last().hide();
//     $(".contactList").show();
//     var j = i;
//     $("#contact" + i).click(function() {
//       $("#person" + j).toggle();
//     })
//   });
// });

// Business logic for AddressBook ------------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(contact) {
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
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}