//基礎編（問題）
//Q 1.変数
let nickname = 'ひでとし';
let age = '23';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q 2.配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(templateText);

//Q 3.オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q 4.配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q 5.四則演算
let averageAge = 0;

for (let i = 0; i < playerList.length; i++) {
  averageAge += playerList[i].age;
}

console.log(averageAge / playerList.length);

//Q 6.関数
function sayHello() {
  console.log('Hello');
}

const sayWorld = function () {
  console.log('World');
}

sayHello();
sayWorld();

//Q 7.メソッド
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log('Hello!');
}

user.sayHello();

//Q 8.引数
let calc = {
  add: function (x, y) {
    console.log(x + y);
  },
  subtract: function (x, y) {
    console.log(x - y);
  },
  multiply: function (x, y) {
    console.log(x * y);
  },
  divide: function (x, y) {
    console.log(x / y);
  },
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(10, 2);

//Q 9.返り値
function remainder(x, y) {
  return x % y;
}

console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');

//Q10.スコープ
//A. x は foo 関数のスコープ内でしか参照できないため、
//関数の外では x を参照できずエラーになる。

//応用編（問題）
//Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10); // 0~9までの乱数の生成
console.log('random => ', random);

//Q2 コールバック関数
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

//Q3 if
let num = 20;

if (num > 0) {
  console.log('num is greater than 0');
}
else if (num < 0) {
  console.log('num is less than 0');
}
else {
  console.log('num is 0');
}

//Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}

console.log(numbers);

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] !== 'number') {
    console.log('not number');
    continue;
  }
  if (mixed[i] % 2 === 0) {
    console.log('even');
    continue;
  }
  if (mixed[i] % 2 === 1) {
    console.log('odd');
  }
}