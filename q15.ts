// Original guest list
const originalGuestList: string[] = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];

// Print original invitations
console.log("Original Dinner Invitations:");
for (let i = 0; i < originalGuestList.length; i++) {
    const originalInvitation: string = `Dear ${originalGuestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host`;
    console.log(originalInvitation);
    console.log("------------------------------"); // Separator between invitations
}

// Replace a guest who can't make it
const guestToReplace: string = 'Marie Curie';
const newGuest: string = 'Albert Einstein';

// Update guest list
const updatedGuestList: string[] = originalGuestList.map(guest => (guest === guestToReplace ? newGuest : guest));

// Print updated invitations
console.log("\nUpdated Dinner Invitations:");
for (let i = 0; i < updatedGuestList.length; i++) {
    const updatedInvitation: string = `Dear ${updatedGuestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host`;
    console.log(updatedInvitation);
    console.log("------------------------------"); // Separator between invitations
}
