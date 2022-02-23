const getInitials = (firstName: string, lastName: string): string => {
    const firstLetter = firstName.charAt(0);
    const secondLetter = lastName.charAt(0);
    return `${firstLetter}${secondLetter}`;
};

const getUserColor = (uid: string): number => {
    if (!uid) {
        return 1;
    }
    if (uid === "1") {
        return 6;
    }
    const idSplit = uid.split("-");
    const id = (idSplit.length && idSplit[idSplit.length - 1]) || "";
    // eslint-disable-next-line radix
    const number = parseInt(id) + 1;
    return (number < 6 && number) || number % 6;
};

export { getInitials, getUserColor };
