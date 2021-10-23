// function add (num1 = 0 , num2 = 0){
//     return num1+num2;
// }
// console.log(add());

// const firstName = "Sidratul";
// const middleName = "Muntaha";
// const lastName = "Tuba";

// const fullName = `The Full Name Of My Wife is ${firstName} ${middleName} ${lastName}.`;
// console.log(fullName);

// const objectArray = [{id:1 , name:"A"},{id:2 , name:"B"},{id:3 , name:"C"},{id:4 , name:"D"}];
// const ids = objectArray.map( idIterator => {
//     if(idIterator.id==='2'){
//         idIterator.id = 20;
//     }
//     return idIterator.id;
// })
// console.log(ids);

// console.log(objectArray.filter(s=>s.id>2));


class Person {
    firstName ;
    lastName;
    constructor(a,b){
        this.firstName = a;
        this.lastName = b;
    }
    total(){
        return this.firstName+this.lastName;
    }
}

const a = new Person("jo",'in');
console.log(a.total());