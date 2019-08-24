
// const speak = function(name ='luigi' , time ='night'){
    
//     console.log(`good ${time} ${name}`);  // <-- here ``


// };
// speak();
// speak('shaun', 'day');
 

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }
// const a = calcArea(5);
// console.log(a);

// const calcArea = (radius) =>{
//     return 3.14 * radius**2;
// };
// const area = calcArea(5);
// console.log('Area is:', area);

// const bill = function(products ,tax){
//     let total =0 ;
//     for(let i= 0 ;i<products.length; i++){
//         total +=products[i]  + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10,15,30], 0.2));

// const name ='shaun';
// const greet =() =>'hello';
// let resultOne = greet();
// console.log(resultOne);
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// let people =['mario', 'luigi', 'ryu', 'shaun']
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);

// };
// people.forEach(logPerson);

const ul =document.querySelector('.people');
const people=['mario', 'luigi' , 'ryu', 'shaun'];
let html= ``;
people.forEach(function(person){
    html += `<li style="color:purple">${person}</li>`;

});
console.log(html);
ul.innerHTML =html;
  