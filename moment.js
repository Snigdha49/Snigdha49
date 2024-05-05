const moment = require("moment")

const getDuration = () =>{
    return moment("2022/1/3").fromNow();
};
const d = getDuration();
console.log({d});
