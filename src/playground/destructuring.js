// const person = {
//     name: 'Andrew', 
//     age: 26,
//     location: {
//             city: 'Tel-aviv', 
//             temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person; 
// console.log(`${firstName} is ${age}.`);
// const { city, temp: temperture } = person.location;
// console.log(`It's ${temperture} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday', 
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName)

const address = ['1299 S Julien', 'Tel aviv', 'Israel', '1135456'];
const [, city, state = 'New York'] = address;
console.log(`You are in  ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mudeumPrice ] = item;

console.log(`A medium ${itemName} costs ${mudeumPrice}.`);