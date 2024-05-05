const Blogs = [
    {title:"Hello Programmers"},
    {title:"The National Heros"},
    {title:"Zero to Hero"},
    {title:"Road to Success"}
];

const search = (arr, keyword) => arr.filter((arr) => arr.title.toLowerCase().includes(keyword.toLowerCase()));


console.log(search(Blogs,"hello"))