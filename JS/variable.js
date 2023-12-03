// var

// We can declare the same name variable.

// var x = 10;
// var x = 20;       //redeclare

// console.log(x);    //20

// var does not have any block scope.

// var x = 10;

// {
//     var x = 20;
// }

// console.log(x);    //20;

// var x;

// console.log(x);   //undefind

// var x = 10;
// var x;

// console.log(x);   //10

// let

// we can not redeclare the same name variable.

// let x = 10;
// let x = 20;

// console.log(x);    // error

// let have block scope.

// let x = 10;

// {
//     let x = 20;
// }

// console.log(x);   //10

// let x = 10;
// x = x + 5;
// console.log(x);    //15

// let x;    //declare
// x = 10;   //initialize
// console.log(x);  //10

//const

// we can not redeclare the same name variable.

// const x = 10;
// const x = 20;
// console.log(x);   //error

// we can not change the value of const variable.
// const x = 10;
// x = x + 5;
// console.log(x);    //error

// declaration and initaization must be done at same time.

// const x;
// x = 10;
// console.log(x);   // error

//const have block scope.
// const x = 10;
// {
//     const x = 20;
// }
// console.log(x);   // 10