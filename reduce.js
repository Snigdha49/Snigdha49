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
 const totalMass = characters.reduce((total,char) =>{
    return total+ Number(char.mass)
 },0);
 console.log(totalMass)

 const totalHeight = characters.reduce((total,char)=>{
    return total+ Number(char.height)

 },0);
 console.log(totalHeight)

 let eyeColors = characters.reduce((ini, current) => {
    if (ini[current.eye_color]) {
      ini[current.eye_color]++;
    } else {
      ini[current.eye_color] = 1;
    }
    return ini;
  }, {});
  
  console.log(eyeColors);