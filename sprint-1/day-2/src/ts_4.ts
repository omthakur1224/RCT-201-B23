
interface Address{
    houseNumber:number,
    street:string,
    city:string,
    state:string,
    postalCode:number,
    country:string
}
interface PersonDetails {
    name:string,
    address:Address,
    phone:number,
}
let person2={
    name:"om",
    address:{
        houseNumber:10,
        street:"na",
        city:"chamba",
        state:"Himachal",
        postalCode:176321,
        country:"india"
    },
    phone:8988021422
}
let personsArray:Array<PersonDetails>=[];

function phoneBook(args:PersonDetails):void{
    personsArray.push(args)
}
let user1 =phoneBook({
    name:"kalpna",
    address:{
        houseNumber:10,
        street:"na",
        city:"chamba",
        state:"Himachal",
        postalCode:176321,
        country:"india"
    },
    phone:8988021422
});

console.log("user1",personsArray)