// Original guest list
var originalGuestList = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];
// Print original invitations
console.log("Original Dinner Invitations:");
for (var i = 0; i < originalGuestList.length; i++) {
    var originalInvitation = "Dear ".concat(originalGuestList[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host");
    console.log(originalInvitation);
    console.log("------------------------------"); // Separator between invitations
}
// Notify the number of people invited to dinner
var numberOfPeopleInvited = originalGuestList.length;
console.log("\nNumber of people invited to dinner: ".concat(numberOfPeopleInvited));
