

// // //    // aftre day
// // // function ass(num1, num2) {
// // //     return num1*num2
// // // }
// // // const total=ass(30, 50)
// // // console.log(total)
  

// // // const add = function asst(g1, g2) {
// // //     return g1/g2
// // // }
// // // const total2 = add(50, 2);
// // // console.log(total2);


// // // const number = function too(go1, fh) {
// // //     return go1-fh
// // // }
// // // const booo = number(99, 90);
// // // console.log(booo);


// // // const rot = function (boo, nan) {
// // //     return boo +nan
// // // }
// // // const rej = rot(50, 30)
// // // console.log(rej);

// // // // default value
// // // const add4 = (hoo, gooo=60) => hoo + gooo
// // // const total4 = add4(40)
// // // console.log(total4);


// // // const add5 = (jaa, maa) => jaa - maa;
// // // const total6 = add5(50, 30);
// // // console.log(total6);

// // // // arrow function
// // const add = (ewo, bo) => ewo * bo;
// // const total = add(40, 3);
// // // console.log(total);
 
// // const sum = (hoo, goo) => hoo + goo;
// // const num = sum(40, 20);
// // // console.log(num);


// // const price = (ram, driv, monetor, dis) => {
// //     const sum2 = ram + driv;
// //     const sum3 = sum2 * monetor;
// //     const sum4 = sum3 - dis
// //     return sum4;
    
// // }
// // const priceList=price(30,50,2,100)
// // console.log(priceList);

// // const fivetime = (num) => num * 4;
// // const total4 = fivetime(50);
// // console.log(total4)

// // const tentime = gooo => gooo * 10
// // const total0 = tentime(20);
// // console.log(total0)

// // const number = [59, 30, 40, 598, 10]
// // console.log(number)
// // console.log(...number)

// // const max = Math.max(59, 39, 209, 600);
// // console.log(max)
// // const mai = Math.min(0, 20, 50, 4999, 40)
// // // console.log(mai)


// // const numbers = [60, 400, 40, 100, 39, 40000];
// // // console.log(...numbers)
// // // after day end


// // // start today 20-02-22

// // const names = {
// //     full: 'rasel', age: 20, roll: 40,
// //     bother: {
// //         fullName: 'roman', age: 18, roll: 333,
// //         food: { name: 'kola', color: 'red', }
// //     }
// // }
// // const full = names.full;
// // console.log(full)
// // const { name, color } = names.bother.food
// // console.log(name, color)

// // const { a, b, go } = { a: 4, b: 0, c: 3, d: 60, go: 44 };
// // const total9 = a + b + go;
// // console.log(total9)

// // const [me, bothor, ma, bon, baba] = ['Rasel', 'Roman', 'Rabaya', 'Aisha', 'dudu'];
// // console.log(me,ma,baba)

// const numbers = [20, 30, 10, 44, 20]
// const output = [];
// for (const nomber of numbers) {
//     const result = nomber * 2;
//     output.push(result);

// }
// console.log(output);
// // function double(number) {
// //     return number * 2;
// // }
// // const numbers= double[20,10,50]
// // console.log(numbers)

// const ages = [20, 30, 40, 50]
// const plusAge = [];
// // for (const age of ages) {
// //     const NewAge = age + 2;
// //     plusAge.push(NewAge);
// // }
// // console.log(plusAge);


// // const plus = ages => ages + 5;
// // for (const age of ages) {
// //     const result = plus(age);
// //     plusAge.push(result)
// // }
// // console.log(plusAge)

// // const double = number => number * 3;
// // const total = double(20);
// // console.log(total)


// const numbers = [30, 20, 50, 60];
// const output = [];
// const dudu = number => number * 2;
// for (const number of numbers) {
//     const result = dudu(number);
//     output.push(result);
// }
// console.log(output);

const newNumber = [40, 50, 30, 10, 20, 220];
const output = newNumber.map(x => x * 2);
console.log(output)
const nomberOf = [40, 59, 10, 8, 400,];
const newa = nomberOf.map(x => x + 5);
console.log(newa);



const manyPepol = [
    { name: 'rasel', age: 30, roll: 30, },
    { name: 'roman', age: 15, roll: 3, },
    { name: 'mitu', age: 10, roll: 40, },
    { name: 'rabaya', age: 60, roll: 10, },
    { name: 'dudu', age: 50, roll: 300, },
    { name: 'aisha', age: 40, roll: 130, },
]
const allName = manyPepol.map(Number => Number.name)
console.log(allName);
