// Js Giris

 // console.log("Merhaba js");

//Degiskenler

// var a = 10;
//var b = 3.14;
 // var c = "Java";

 // console.log(a);
// console.log(typeof a);
 // console.log(a,b,c); //
//  var firstNumber=10;// 
 //  var secondNumber="20";// 
 //  var result=firstNumber+secondNumber; // 
// var result=firstNumber-secondNumber; //
//console.log(result);
//console.log(typeof result);

 // var firstNumber;
 //console.log(firstNumber);
 //firstNumber=20;
// a();
//function a()
//{
   // console.log("a fonksiyonu");
//}

// var isActive=true;

// if(age) {
    //  age => 18 ? console.log("Ehliyet alabilir") : console.log("Ehliyet alamaz");
// }

// undifined-tanimsiz
 // var userName;
 // console.log(userName);
// console.log(typeof userName);

// null- deger yok
//  var isNull=null;
//  console.log(isNull);
//  console.log(typeof isNull);

//  Array
// var fruits=["elma","armut","muz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]); 

//function

// function hello() {
//     console.log("Merhaba Java");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

// date
// var date=new Date();
// console.log(date);
// console.log(typeof date);

// var a =10;
// var b =a;
// console.log("1-",a,b);
// a=20;
// console.log("2-",a,b);

// var a =[10];
// var b =a;
// console.log("1-",a,b);
// a=[20];
// console.log("2-",a,b);
// console.log("3-",a*b);

// var a = [10,20,30,40,50];
// var b=a;
// console.log(("1-",a,b));
// a[0]=60;
// a.push(60);
// console.log("2-",a,b);
// var a=10 //Global scope
// b=15;
// function scope() {
//   b=20;
//     console.log(a,b);
// }
// if(true){
//     var c=30;
// }
// var d=40;
// console.log(a,b,c,d);

//tip donusumlerı

// var a=5;
// console.log(a,typeof a);
// a=String(a);
// console.log(a,typeof a);

// var a=5;
// console.log(a,typeof a);
// a=Number(a);
// console.log(a,typeof a);

// var a="deneme";
// console.log(a,typeof a);
// a=Number(a);
// console.log(a,typeof a);

// var a=5+ "2";
// console.log(a,typeof a);

// var a=5 - "2";
// console.log(a,typeof a);

//operatorler

//atama operatorlerı (=)
//var a = 10;

// const a=10; //sabit deger const

//math fonk.
// let sonuc=
// sonuc=Math.PI;
// sonuc=Math.ceil(3.2);
// sonuc=Math.floor(3.9);
// sonuc.Math.random();
// console.log(sonuc);

//string metotlar
// let value;
// const firstName="Sinan";
// const lastName="Guler";
// const department="Java vs";
// const age="32";
// value = firstName + " " + lastName;
// value=firstName;
// value+=" "+lastName;
// value=firstName.length;
// value=firstName.toUpperCase();
// value=firstName.toLowerCase();
// value=firstName[0];
// value=firstName.indexOf("a");
// value=firstName.includes("a");
// value="İsim:"+ firstName + " " +  "Soyisim:" +lastName + " " + age ;
// value=`Isim: ${firstName} // template
// Soyisim:${lastName}
// Yas: ${age}`;
// console.log(value);

//Array metotlar

// const langs=["Pyhton","Java","C++"];
// const number=[43,22,55,75];
// value=number.length;
// value=number[0];
// value=number[number.length-1];
// value=number.includes(12);
// value=number.push(100);
// value=number.unshift(22);
// value=number.pop(100);
// value=number.sort();
// value=number.sort(function(a,b)
// {
//     return a-b;
// })

// console.log(number);
// console.log(value);
//object metot

// const student= {
//     fullName:"varol maksutoglu",
//     age:30,
//     adress:{
//         city:"istanbul",
//         country:"Türkiye",
//     },
// langs:["Phyton","C#"],
// work:function (){
//     console.log("Calisiyor..");
// },
// };
// value=student;
// value=student.fullName;
// value=student.langs;
// value=student.adress.city;
// value=student.work();
// let date=new Date();
// value=date;

//karsılastırma operatorleri

// console.log(2 == 2);
// a =10;
// b=20;
// c="10";
// d=10;
// value= a==b ;

//kosullar
let a = 10;
let b =20;
if (a > b) {
    value=`${a}büyüktür ${b}`;

} else if (a==b) {
    value=`${a}esittir ${b}`;
} else {
    value=`${a}kücüktür ${b}`;
}

console.log(value);