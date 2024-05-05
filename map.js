const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
 

const nameArr = characters.map(character => (character.name));
console.log(nameArr)

const heightArr = characters.map(character => (character.height));
console.log(heightArr)

const nameHeight = characters.map(character =>({
    name: character.name,
    height: character.height,
}))
console.log(nameHeight);

const firstName = characters.map(character => {
    const newName = character.name.split(' ');
    return newName[0]
});
console.log(firstName)