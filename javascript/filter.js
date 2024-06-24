let students = [
    { id: "001", name: "Anish",sports: "cricket"},
    { id: "002", name: "Smriti",sports: "Basketball"},
    { id: "003", name: "Rahul",sports: "cricket"},
    { id: "004", name: "Bakul",sports: "Basketball"},
    { id: "005", name: "Nikita",sports: "Hockey"}
]

// const NewArray = students.filter((curValue) => {

//     if(curValue.id % 2 ==0) return true;
//     else return false

    
// })
// console.log("New Array here");
// console.log(NewArray);
const names = students
.filter((curValue) => curValue.sports === "cricket")
.map((curValue, index , array) => {
    return `<li>${curValue.name}</li>`;
});
   console.log(names);
const div = document.getElementById('container');
div.innerHTML = `<ul>${names.join('')}</ul>`;  //join is used to convert array into string 
