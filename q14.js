// Array of people to invite to dinner
var guestList = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];
// Print personalized invitation messages
console.log("Dinner Invitations:");
for (var i = 0; i < guestList.length; i++) {
    var invitation = "Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host");
    console.log(invitation);
    console.log("------------------------------"); // Separator between invitations
}
