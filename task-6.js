let input;

const numbers = [];

let total = 0;

while (input !== null) {
    input = prompt('Введите ваше число');
            
if (input === null) {
    break;
} else {
    numbers.push(Number(input));
};
};

if (numbers.length === 0 ) {
    console.log('Вы оставили массив пустым');
} else { 
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
};