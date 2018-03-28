// let a=1;
// console.log(a);
//
// for(let i = 0;i <10;i++){
//     console.log("循环体内"+i);
// }
// console.log("循环体外"+i);

// function bar(x = y,y = 2) {
//     return [x,y];
// }
//
// console.log(bar());

/*
TypeError:重复定义变量 Duplicate declaration
 */
// function func() {
//     let a = 10;
//     let a = 1;
// }

// function func(arg) {
//     let arg = 2;
// }
// var s = 'hello';
//
// for (let i = 0;i < 5;i++){
//     console.log(s[i]);
// }
// alert(i);

function getAge(){
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth:1990,
    age:getAge
}

console.log(xiaoming.age());
console.log(getAge.apply(xiaoming,[]));

var count = 0;
var oldParseInt = parseInt;

window.parseInt = function(){
    count += 1;
    return oldParseInt.apply(null,arguments);
};

parseInt(10);
parseInt(20);
parseInt(30);
console.log('count = '+count);

//高阶函数
