// console.log("joshi");

// //VARIBLE TYPES
// // var,let,const

// var a=1;
// console.log(a);
// a='chv';
// console.log(a);
// a=1.5;
// console.log(a);
// a=true;
// console.log(a);

// console.log("============================")
// let b=1;
// console.log(b);
// b='chv';
// console.log(b);
// b=1.5;
// console.log(b);
// b=true;
// console.log(b);

// console.log("=============================")

// const c=10;
// console.log(c);


// console.log("======conditional statement==========")

// if(a===true){
//     console.log(a)
// }

// if(a===false){
//     console.log(a);
// }else{
//     console.log("a is true")
// }

// if(a===true){
//     console.log("a is false")
// }else if(a===false){
// console.log("a is false")
// }else if(a===false){
//     console.log("a is false")
// }else{
//     console.log("a is false");
// }

// console.log("==========switch======")
// a=4;
// console.log(a);
// switch(a){
//     case 1:
//         console.log("first case");
//         break;
//     case 2:
//         console.log("second case");
//         break;
//     case 3:
//         console.log("third case");
//         break;
//     default:
//         console.log("none of the cases");
//         break;
// }

// console.log("=================loops=============")
// console.log("=========for===========")
// for(let d=0;d<=10;d++){
//     console.log(d);
// }

// let e=0;
// console.log("============while==========");
// while(e<10){
//     console.log(e);
//     e++;
// }

// console.log("==========do while==========")
// let f=0;
// do{
//     console.log(f);
//     f++;
// }while(f<=10)

//Arrays
        //  0,1,2,3,4,5
var array =[1,2,3,4,5,6];
console.log(array);
console.log(array.length);
console.log(array.indexOf(5));
console.log(array[3]);
var array1 =[7,8,9,10];
console.log(array1.concat(array));
array.push('chv');
console.log(array);
array.unshift(1.6);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);

//for in loop

for(let y in array1){
    //logic
}

for(let x in array){
    console.log(x);
}


//for of
for(let z of array1){
    console.log(z);
}


//object
var obj={
    name:"joshi",
    age:27,
    dob:"25-1-4555",
};

let emp=[{name:"joshi",department:"Engineering"},{name:"joshi",department:"Engineering"},
    {name:"joshi",department:"Engineering"}];


//functions
function chv(){
    //logic
    console.log("this is chv function");
}

//calling function
chv();

function chv1(name,age){
    console.log(name);
    console.log(age);
}

chv1("joshi",12);
chv1(13,15);
chv1("abc","bca");
chv1(true,false);


//arrow
var app =()=>{console.log("app function")}
app();

var app1=(a,b)=>{
    console.log(a+b);
}
app1(1,3);
console.log("chv");
console.log("this is test branch2")
console.log("this is test branch3");