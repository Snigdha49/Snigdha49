// const sentences = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the";
//  const generateDescription = (text) =>text.length > 50? text.slice(0,30).concat("...") :text;
   
//  const response = generateDescription(sentences);
//  console.log({response})
 

// Reading duration of blog in js

const duration = (text) => Math.ceil(text.split(" ").length/183);

const dur = duration("lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the")
console.log(dur)