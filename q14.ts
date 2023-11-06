// Array of people to invite to dinner
const guestList: string[] = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];

// Print personalized invitation messages
console.log("Dinner Invitations:");
for (let i = 0; i < guestList.length; i++) {
    const invitation: string = `Dear ${guestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host`;
    console.log(invitation);
    console.log("------------------------------"); // Separator between invitations
}
