// 
// 
// const a = [2,4,5,-3,7,9,-5,];
// const firstNeg = (num) => {
//     return num<5;
// };

// const result = a.find(firstNeg);
// console.log(result); // -3
// setTimeout(function () {
//     console.log('this will assecute after 3s:');
// },3000);   
// const result1 = a.findIndex(firstNeg);
// console.log(result1); // 3
// ---------------------------------------------------------------------------


// function getCheese(callback) {
//      setTimeout(() => {
//         const cheese="🧀";
//         console.log('here is the cheese',cheese);
//         callback(cheese);
//      },2000);
// }
// function makeDough(cheese,callback) {
//     setTimeout(() => {
//         const dough = cheese + '🍕';
//         console.log('here is the dough', dough);
//         callback(dough);
//     }, 2000);
// }
// function myPizza(dough,callback) {
//     setTimeout(() => {
//         const pizza = dough+ '👌';
//         console.log('here is the pizza', pizza);
//         callback(pizza);
//     }, 3000);
// }
// //   callback hell function---------------------------
// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//       myPizza(dough, (pizza) => {
//      console.log('got my pizza',pizza);});
// });
// });

// --------------------------------------------------------------------
// promises in javascript
function getCheese(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);

    });
};
function makeDough(cheese){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const dough = cheese+ "🍕";
            resolve(dough);
        }, 2000);

    });
};
function bakePizza(dough){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const pizza = dough + "😊";
            resolve(pizza);
        }, 2000);

    });
};
// 

// getCheese()
// .then((cheese)=> {
//     console.log('here is the cheese',cheese);
//     return makeDough(cheese);
// })
// .then((dough)=> {
//     console.log('here is the dough',dough);
//     return makeDough(dough);
// })
// .then((pizza)=> {
//     console.log('here is the pizza',pizza);
    
// })
// .catch((data) => {
//     console.log('erreo is found',data);
// })
// .finally((data) => {
//     console.log('process ended');
// });
 async function orderPizza() {
    try{
        const cheese = await getCheese();
        console.log('here is the cheese',cheese);
        const dough =  await makeDough(cheese);
        console.log('here is the dough',dough);
        const pizza = await bakePizza(dough );
        console.log('here is the pizza',pizza);
    } catch(err) {
        console.log('erreo is found',err);
    }

};
orderPizza();