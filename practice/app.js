//ログ出力
// alert('Hello World');
//console.log('Hello World');

//変数
let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);

let testText;
console.log(testText); // => undefined

//letは再定義できない

const constant = 'これは定数です';
//値の再代入はできない

let string = 'JavaScriptの練習';
console.log(string);

//'' と ""の違い
//実際に組む際はどちらかに統一
let single = '文字列型です';
console.log(single);

let double = "英語だとstringといいます。";
console.log(double);

//文字列結合
let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

//テンプレートリテラル
//`を使う`改行もできる
let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

//数値型
let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加
//''を使うと文字列になるため注意

let minus = -10;//可能
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let number = 5;
number += 3; // number = number + 3と同じ
console.log(number);
// 以下を追記
number -= 1; // number = number - 1と同じ
console.log(number);
number *= 5; // number = number * 5と同じ
console.log(number);
number /= 7; // number = number / 7と同じ
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let bigNum = 25;
let smallNum = 2;

console.log(bigNum % smallNum); // 25 / 2 = 12 あまり 1 なので1が表示される

// 以下を変更
console.log(bigNum ** smallNum);
//''を付けると文字列になってしまうため注意
let stringNum = '25';
let numberNum = 2;

console.log(stringNum + numberNum); // => 252

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

let empties = []; // 空の配列が変数emptiesに代入されている

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

//オブジェクト型
let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(John.bloodType);

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

/*
配列とオブジェクトの使い分け
  配列は同じジャンルのものをまとめるときに使う
  オブジェクト型は同じもののそれぞれの属性をまとめるときに使う
*/

let fruits = ['apple', 'banana', 'grape'];

let apple = {
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
};

//配列の中にオブジェクトを入れることもできます。(その逆でオブジェクトの中に配列を入れることもできます)
let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];

//関数
function getArea() {
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea();

//引数
function getArea2(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea2(5);

function getArea3(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea3(5) + 'です');
console.log('この円の面積はなんと' + getArea3(10) + 'でござんす');

//関数定義方法
function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
  return 'This is console in showConsole function!';
}

define1();
define2();

//コールバック
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

doFunc(output);

let John2 = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John2.sing();

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);

myFunc()

function myFunc() {
  let userAge = 27;//スコープ
  console.log(userAge); // => 27
}

console.log(userAge); 


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);