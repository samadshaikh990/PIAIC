// Original guest list
var originalGuestList = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];
// Print original invitations
console.log("Original Dinner Invitations:");
for (var i = 0; i < originalGuestList.length; i++) {
    var originalInvitation = "Dear ".concat(originalGuestList[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host");
    console.log(originalInvitation);
    console.log("------------------------------"); // Separator between invitations
}
// Replace a guest who can't make it
var guestToReplace = 'Marie Curie';
var newGuest = 'Albert Einstein';
// Update guest list
var updatedGuestList = originalGuestList.map(function (guest) { return (guest === guestToReplace ? newGuest : guest); });
// Print updated invitations
console.log("\nUpdated Dinner Invitations:");
for (var i = 0; i < updatedGuestList.length; i++) {
    var updatedInvitation = "Dear ".concat(updatedGuestList[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host");
    console.log(updatedInvitation);
    console.log("------------------------------"); // Separator between invitations
}
