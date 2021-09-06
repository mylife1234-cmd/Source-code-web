/**
 * Data type:
 * Primitive types:
 *  - Number
 *  - Boolean
 *  - String
 * Special types:
 * - null 
 * - undefined
 * Reference types:
 * - Object
 * - Array
 */
//Number 
var a1 = 100;
//String 
var str = 'Hello';
var str2 = "Hello";
var str3 = 'Hello i\'m Johnson'; // escape a character
//Boolean trang thai cua mot nut bam
var isHidden = true;
//undefined khi gan a la mot gia tri hoac khong gan gi het
var b;
//null
var a = null;
//Object
//quy tac dat ten bien camelCase
var myDog = {
    //key : value
    name : 'Mick',
    weight : 6,
    isAlive : true
};
myDog.weight = 10;
console.log(myDog.name);
myDog['isAlive'] = true;
var ab ={};
//Array Lưu trữ list gồm các phần tử giống nhau
var dog1 = {
    type = 'dog'
};
var dog2 = {
    type = 'lapxuong'
};
var dog3 = {
    type = 'husky'
};
var bunchOfDog = {dog1,dog2,dog3};
var dog4 = {
    type = 'shiba'
};;
bunchOfDog[0] = dog4;
var contacts     = [
    {name : 'Cuong', phone: '0393885896'},
    {name : 'Quynh', phone: '0862033262'}
];
//Function
function calculateTriangle(a,h){
    return a * h / 2;
}
console.log(calculateTriangle(10,5));
//object method
var myDog1 = {
    weight: 5,
    name: 'Nick',
    bark: function() {
        console.log('meo meo' + this.name);
    },
    eat: function(bone){
        this.weight += bone.weight;
    } 
};
var bone = {
    weight : 0.5
};
myDog1.eat(bone);
myDog1.bark();
//for loop
for(var i = 1;i < 10; i++){
    console.log(i);
}
var employee = [
    {name: 'Cuong', age: 21},
    {name: "Quynh", age: 21}
];
for(var i = 0; i < employee.length; i++){
    console.log(employee[i].name);
}
//for ...of
for(employees of employee){
    console.log(employee.name);
}
//for ...in
var myDog2 = {
    name : 'Mick',
    age : 6,
    weight : 5,
};
for(var key in myDog2){
    console.log(key, myDog2[key]);
}
// dùng function như mổ tham số
var coffeeMachine = {
    makeCoffee = function(onFinish ){
        console.log('Making coffee....');
        onFinish();
    }
};
var beep = function(){
    console.log('bip bip,....');
}
coffeeMachine.makeCoffee(beep);
coffeeMachine.makeCoffee(function(){
    console.log('tit tit....');
});
//array map
function tripple(num) {
  return num * 3;
}

function multiply(numbers) {
  // Write code here...
    return numbers.map(function(x) {
    return tripple(x);
    });
}
// array filter
var numbers = [1,2,3,4];
var evenNumber = numbers.filter(function(item){
    return item%2===0;
});
console.log(evenNumber);
// array find
var numbers = [1,2,3,4];
numbers.find(function(x){
    return x%2===0;
})
// array reduce
var numbers = [1,2,3,4];
var sum = numbers.reduce(function(a,b){
    return a+b;
})
//array reduce 2
var numbers = [1,2,3,4];
var sums = numbers.reduce(function(a,b){
    return a+b;
},1)
var product = [
    {name :'A', quality: 2, unitPrice = 10},
    {name :'B', quality: 3, unitPrice = 20},
    {name :'C', quality: 4, unitPrice = 30}
];
var total = product.reduce(function(currentTotal, products){
    return currentTotal + products.quality + products.unitPrice;
},0);
//sort an array
var numbers = [2,3,9,4,1];
//ascending order
numbers.sort(function(a,b){
    return a - b;
});
//descending order
numbers.sort(function(a,b){
    return b-a;
});
//the 'new' keyword
//var today = new Date();
//console.log(today);
//create a new object , object literal
var mouse={
    weight : 0.2,
    getWeight : function(){
        return this.weight;
    }
};
//constructor function
function Mouse(color){
    this.type = mouse;
    this.color = color;
}
var mouse1 = new Mouse('White');
//method chaining
var tom = {
    name: 'Tom',
    stomach:[],
    eat : function(mouse){
        this.stomach.push(mouse);
        return this;
    }
};
var m1 = {name : 'm1'};
var m2 = {name : 'm2'};
var m3 = {name : 'm3'};
tom.eat(m1).eat(m2).eat(m3);
//prototype
console.log(Mouse.prototype.constructor);
Mouse.prototype.sleep = function(){
    console.log('Zzzz......');
}
var jerry = new Mouse('white');
jerry.sleep();
//node module system
function Mouse(color){
    this.color = color;
    this.dead = false;
}
Mouse.prototype.die = function(){
    this.dead = true;
}
function Cat(){
    this.stomach =[];
}
module.exports = Mouse;
//su dung tu file khac trong cung mot folder    
var Mouse = require('./index')
Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}
var micky = new Mouse('black');
var jerry = new Mouse('orange');
//node build-in module
var fs = require('fs');
var text = fs.readFileSync('./index.js', {encoding : 'utf8'});
fs.writeFileSync('./index.js','I m tired')
//node package manager
//command: npm init sau dó npm install + package + --save 
// JSON method
var myDog = {name: MICK, age: 1, dead: false};
var myDogString = JSON.stringify(myDog);
console.log(typeof myDogString);
var myCatString = '{"name":"TOM", "age" :2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);
//if else 
function tossCoin(){
    var value = Math.random();
    if(value <0.5){
        console.log('Mặt sấp');
    }
    else{
        console.log('Mặt ngửa');
    }
}
tossCoin();
var bills = [
    {value: 10000},
    {value: 20000},
    {value: 20000},
    {value: 500000}
];
function countBills(bills){
    
}
//Ternary operator
var value = Math.random();
var result = (value < 0.5) ? 'mat sap' : 'mat ngua';
function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example() {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
//else if
//switch case
//while do while
//Student manager app (CLI)
//Sync and Async(Synchronous and Asynchronous )
//Sync
var fs = require('fs');
console.log('Start');
var song1 = fs.readFileSync('./song1.txt',{encoding:'utf8'});
console.log(song1);
var song2 = fs.writeFileSync('./song2.txt',{encoding:'utf8'});
console.log(song2);
console.log('End');
//Async
console.log('Start');
fs.readFile('/song1.txt',{encoding:'utf8'},function(error,data){
    console.log(data);
});
//call back-hell
var fs = require('fs');
//async
fs.readFile('/song1.txt',{encoding:'utf8'},function(error,song1){
    console.log(song1);
    fs.readFile('/song2.txt',{encoding:'utf8'},function(error2,song2){
        console.log(song2);
        fs.readFile('/song3.txt',{encoding:'utf8'},function(error3,song3){
            console.log(song3);
        });
    });
});
//Promise
var fs = require('promise-fs');
function onDone(song){
    console.log(song)
}
function readFile(path){
    return fs.readFile(path,{encoding:"utf8"});
}
readFile('./song1.txt')
    .then(onDone) 
    .then(function(){
        return readFile('./song2.txt')
    })
    .then(onDone)
    .catch(function(error){
        console.log(error);
    });
//cac khoi tao promise ko dung module
var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(error, data){
            if(error){
                reject(); //truyen vao catch
            }
            else{
                resolve(data); // truyen vao then()
            }
        });
    });
}
readFilePromise('./song1.txt')
    .then(function(song1){
        console.log(song1);
    })
    .catch(function(err){
        console.log(err);
    });
//promise.all
var fs = require('fs');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(error, data){
            if(error){
                reject(); //truyen vao catch
            }
            else{
                resolve(data); // truyen vao then()
            }
        });
    });
}
readFilePromise('./song1.txt')  
.then(function(song1){
    console.log(song1);
    return readFilePromise('./song2.txt');   
})
.then(function(song2){
    console.log(song2);
    return readFilePromise('./song3.txt');
})
.then(function(song3){
    console.log(song3);
})


Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt') //resolved
]).then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
});
//node co
var fs = require('fs');
var co = require('co');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(error, data){
            if(error){
                reject(); //truyen vao catch
            }
            else{
                resolve(data); // truyen vao then()
            }
        });
    });
}
co(function*(){  //generator function
    //var song1 = yield readFilePromise('./song1.txt'); 
    //var song2 = yield readFilePromise('./song2.txt');
    //var song3 = yield readFilePromise('./song3.txt');
    var value = yield [
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt')
    ]
    //console.log[song1, song2, song3];
    return value;
}).then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
})

var readFile = co.wrap(function*(files){
    var value = yield files.map(function(file){
        return readFilePromise(file)
    });
});
readFile(['./song1.txt','./song2','./song3.txt'])
.then(function(value){
    console.log(value);
});
//async await node>=7.6
var fs = require('fs');
var co = require('co');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:'utf8'},function(error, data){
            if(error){
                reject(); //truyen vao catch
            }
            else{
                resolve(data); // truyen vao then()
            }
        });
    });
}

async function run() {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    console.log(song1, song2);
    return [song1, song2];
}
run().then(function(value){
    console.log(value);
})
//set time out
//clear time out
setTimeout(function(){
    console.log('Finish');
},1000);
//setInterval
//clearInterval
var i=0;
var intervalID = setInterval(function(){
    ++i;
    console.log(i);
    if(i==10){
        clearInterval(intervalID);
    }
},1000);
//date : tu hoc
var now = new Date();
//moment.js
var moment = require('moment');
var now1 = moment('2018-07-12 07:00');
console.log(now1.fromNow()); 
//scope
//1.Global scope
//2.Local scope