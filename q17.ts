// Original guest list
const originalGuestList: string[] = ['Leonardo da Vinci', 'Marie Curie', 'Nelson Mandela'];

// Print original invitations
console.log("Original Dinner Invitations:");
for (let i = 0; i < originalGuestList.length; i++) {
    const originalInvitation: string = `Dear ${originalGuestList[i]},\nYou are cordially invited to dinner. It would be an honor to have you join us for an evening of good food and conversation.\nSincerely, Your Host`;
    console.log(originalInvitation);
    console.log("------------------------------"); // Separator between invitations
}

// Notify that only two people can be invited
console.log("\nUnfortunately, the dinner table won't arrive in time, and we can only invite two people.");

// Remove guests one at a time until only two names remain
while (originalGuestList.length > 2) {
    const removedGuest: string = originalGuestList.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations for the two remaining guests
console.log("\nInvitations for the two remaining guests:");
for (let i = 0; i < originalGuestList.length; i++) {
    const invitation: string = `Dear ${originalGuestList[i]},\nYou are still invited to dinner. We look forward to seeing you.\nSincerely, Your Host`;
    console.log(invitation);
}

// Remove the last two names to ensure an empty list
originalGuestList.pop();
originalGuestList.pop();

// Print the empty guest list
console.log("\nGuest list after the dinner:");
console.log(originalGuestList);
