// Задание 6.6.1


const word = "авава"; 
let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("Слово является палиндромом");
} else {
  console.log("Слово не является палиндромом");
}


// Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
let arrNew = new Set(arr);
console.log(Array.from(arrNew));

// Задание 6.6.3

// Запросите у пользователя любое число. На основании ответа создайте массив и 
// заполните его числами от нуля до введённого числа. Не забудьте привести полученное 
// от пользователя значение к типу number.

let number = +prompt('Введите любое число');
let result = [];
    for (let i = 1; i <= number; i ++) {
        result.push(i);
    }  
console.log(result)  

// Задание 6.6.4
// С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.
// x o x
// o x o
// x o x

const borderSize = 3;
let border = [];
for (let i = 0; i < borderSize; i ++) {
    let row = [];
    for (let k = 0; k < borderSize; k ++) {
      row.push(Math.random() < 0.5 ? 'X' : 'O')
    }
    border.push(row)
    console.log(border[i].join(' '))
}

// Задание 6.6.5
// Есть объект obj. В одном из ключей объекта — массив. Добавьте в новый массив arrValues значения всех ключей объекта. 
// Если значение — массив, добавьте каждый элемент в массив arrValues.


const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

    const arrValues = [];
      
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];

            if (Array.isArray(value)) {
            arrValues.push(...value);
            } 
            else {
            arrValues.push(value);
            }
        }
    }
      
    console.log(arrValues);
