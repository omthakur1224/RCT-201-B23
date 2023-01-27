let person2 = {
    name: "om",
    address: {
        houseNumber: 10,
        street: "na",
        city: "chamba",
        state: "Himachal",
        postalCode: 176321,
        country: "india"
    },
    phone: 8988021422
};
let personsArray = [];
function phoneBook(args) {
    personsArray.push(args);
}
let user1 = phoneBook({
    name: "kalpna",
    address: {
        houseNumber: 10,
        street: "na",
        city: "chamba",
        state: "Himachal",
        postalCode: 176321,
        country: "india"
    },
    phone: 8988021422
});
console.log("user1", personsArray);
