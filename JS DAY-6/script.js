
let user={
    fullname:"John Doe",
    address: {
        city: "New York", state: "NY"
    }
    mobileno: "5551234",
    favcolor: ["blue", "green", "red"],
    demo: function(){
        return "demo function";
    }
}
console.log(user.fullname, user.address, user.mobileno, user.favcolor);
user.demo(), user.address.city

const car={
    brand:"Toyota",
    model:"Camry",
};
// we can't add a new key and value pair but we can change or update the existing key value pair.

Object.seal(car);
// we can't add a new key and value pair also can't change or update the existing key value pair.

Object.freeze(car);

car.model="Corolla";
car.color="Blue";
console.log(car);