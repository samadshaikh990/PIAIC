// Original guest list
const originalGuestList: string[] = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];

// Print original invitations
console.log("Original Dinner Invitations:");
for (let i = 0; i < originalGuestList.length; i++) {
    const originalInvitation: string = `Dear ${originalGuestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host`;
    console.log(originalInvitation);
    console.log("------------------------------"); // Separator between invitations
}

// Notify the number of people invited to dinner
const numberOfPeopleInvited: number = originalGuestList.length;
console.log(`\nNumber of people invited to dinner: ${numberOfPeopleInvited}`);
