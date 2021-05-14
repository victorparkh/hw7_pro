do {
  operation = prompt("Введите операцию");
} while (
  operation != "+" &&
  operation != "-" &&
  operation != "*" &&
  operation != "/"
);
do {
  quantity = prompt("Введите количество операндов");
} while (quantity <= 1 || quantity >= 7 || isNaN(quantity));

switch (operation) {
  case "+":
    array = [];
    for (i = 1; i <= quantity; i++) {
      do {
        iter = +prompt(`Введите значение №${i}`);
      } while (isNaN(iter));
      array.push(iter);
    }
    result = array[0];
    length = array.length;
    for (j = 1; j < length; j++) {
      result += array[j];
    }
    console.log(array);
    break;
  case "*":
    array = [];
    for (i = 1; i <= quantity; i++) {
      do {
        iter = +prompt(`Введите значение №${i}`);
      } while (isNaN(iter));
      array.push(iter);
    }
    result = array[0];
    length = array.length;
    for (j = 1; j < length; j++) {
      result *= array[j];
    }
    console.log(array);
    break;
  case "-":
    array = [];
    for (i = 1; i <= quantity; i++) {
      do {
        iter = +prompt(`Введите значение №${i}`);
      } while (isNaN(iter));
      array.push(iter);
    }
    result = array[0];
    length = array.length;
    for (j = 1; j < length; j++) {
      result -= array[j];
    }
    console.log(array);
    break;
  case "/":
    array = [];
    for (i = 1; i <= quantity; i++) {
      do {
        iter = +prompt(`Введите значение №${i}`);
      } while (isNaN(iter));
      array.push(iter);
    }
    result = array[0];
    length = array.length;
    for (j = 1; j < length; j++) {
      result /= array[j];
    }
    console.log(array);
    break;
  default:
    alert("Нет никаких значений");
}

console.log(`Операция: ${operation}`);
console.log(`Количество: ${quantity}`);
console.log(`Результат: ${result}`);
