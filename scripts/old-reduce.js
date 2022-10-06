const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, x) => {
  return acc + x
}, 0)

console.log('sum', sum)

const add = (x, y) => {
  return x + y
};

const newSum = numbers.reduce(add, 0)
console.log('newSum', sum)