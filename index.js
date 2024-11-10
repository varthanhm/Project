// run `node index.js` in the terminal

for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log('amazon');
    continue;
  }
  if (number % 3 == 0) {
    console.log('google');
    continue;
  }
  if (number % 5 == 0) {
    console.log('facebook');
    continue;
  }
  console.log(number);
}
