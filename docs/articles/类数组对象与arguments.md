## 类数组对象

所谓的类数组对象:
拥有一个 length 属性和若干索引属性的对象

```js
var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
```
其读写、长度都是和数组结果一致的（for循环遍历也一样）
```js
console.log(array[0]); // name
console.log(arrayLike[0]); // name

array[0] = 'new name';
arrayLike[0] = 'new name';

console.log(array.length); // 3
console.log(arrayLike.length); // 3
```
但是调用原生的数组方法会报错，如push

## 调用数组方法
只能通过 Function.call 间接调用

```js
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }

Array.prototype.join.call(arrayLike, '&'); // name&age&sex

Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// slice可以做到类数组转数组

Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase();
}); 
// ["NAME", "AGE", "SEX"]
```

类数组转化为数组

```js
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
// 1. slice
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"] 
// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] 
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"] 
// 4. apply
Array.prototype.concat.apply([], arrayLike)
```

## Arguments对象

Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。

```js
function foo(name, age, sex) {
    console.log(arguments);
}
foo('name', 'age', 'sex')
```
```
{
    {
    "0": "name",
    "1": "age",
    "2": "sex"
    }
    callee: ƒ foo(name, age, sex)
    length: 3
    Symbol(Symbol.iterator): ƒ values()
}
```
### callee属性
Arguments 对象的 callee 属性，通过它可以调用函数自身。
讲个闭包经典面试题使用 callee 的解决方法：

```js
var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
       console.log(arguments.callee.i) 
    }).i = i;
}

data[0]();
data[1]();
data[2]();

// 0
// 1
// 2
```

ES6
使用ES6的 ... 运算符，我们可以轻松转成数组。
```js
function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);
```