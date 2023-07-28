// const car1 = {
//     brand: 'bmw',
//     maxSpeed: 220,
//     complectation: {
//         multimedia: true,
//     }
// };
//
// const car2 = {...car1, complectation: {...car1.complectation}};
//
// car2.brand = "Opel";
// car2.complectation.multimedia = false;
// console.log(car1);
// console.log(car2);

const cars = [
    {
        brand: 'bmw',
        maxSpeed: 220,
    },
    {
        brand: 'opel',
        maxSpeed: 240,
    },
    {
        brand: 'toyota',
        maxSpeed: 200,
    },
    {
        brand: 'audi',
        maxSpeed: 260,
    }
];

const newCar = {
    brand: "renault",
    maxSpeed: 300
}

// cars.push(newCar)  /* на JS */
// cars.unshift(newCar); /* на JS */
// console.log(cars);

// const updateCars = [...cars, newCar];   /* на React */
// console.log(updateCars);

// cars.shift();
// cars.pop();

// const updatedCars = cars.filter((car) => {
//     return car.brand !== 'audi';
// })

// console.log(updatedCars);
// console.log(cars);

// const carDealer = {
//     name: "Toyota",
//     address: {
//         city: "New York",
//         street: "Minetta",
//         coordinate: {
//             lat: 34.56,
//             lon: 435.67
//         }
//     }
// }
//
// const updatedCarDealer = {
//     ...carDealer,
//     address: {
//         ...carDealer.address,
//         coordinate: {...carDealer.address.coordinate, long: 33.33},
//     }
// }
// console.log(updatedCarDealer)

// 1. Simple object
// let man = {
//     name: "John",
//     age: 28,
// }
//
// let manFullCopy = {...man}; // your code
// console.log(manFullCopy)


// 2. Array of primitives
// let numbers = [1, 2, 3];
// let numbersFullCopy = [...numbers]; // your code
// console.log(numbersFullCopy)

// 3. Object inside an object
// let man1 = {
//     name: "John",
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//     }
// }
//
// let man1FullCopy = {...man1, mother: {...man1.mother}}; // your code
// console.log(man1FullCopy)

// 4. Array of primitives inside an object
// let man2 = {
//     name: "Jev",
//     age: 43,
//     friends: ["Peter", "Mark", "Eve"],
// }
// let man2FullCopy = {...man2, friends: [man2.friends]}; // your code
// console.log(man2FullCopy)
