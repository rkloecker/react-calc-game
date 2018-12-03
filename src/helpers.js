const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
};

const randomNumber = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const square = max => {
  let num1 = randomNumber(2, max);
  let text = `${num1} x ${num1}`;
  let val = num1 * num1;
  return { val, text };
};
const cube = max => {
  let num1 = randomNumber(2, max);
  let text = `${num1} x ${num1} x ${num1}`;
  let val = num1 * num1 * num1;
  return { val, text };
};
const sqroot = max => {
  let num1 = randomNumber(2, max);
  let val = Math.sqrt(num1);
  val = val.toFixed(2);
  let text = `${num1}`;
  return { val, text };
};
const eins = max => {
  let num1 = randomNumber(2, max);
  let num2 = randomNumber(2, max);
  let text = `${num1} x ${num2}`;
  let val = num1 * num2;
  return { val, text };
};
const bindec = max => {
  let num1 = randomNumber(2, max);
  let text = "0b" + num1.toString(2);
  let val = num1;
  return { val, text };
};
const hexdec = max => {
  let num1 = randomNumber(2, max);
  let text = "0x" + num1.toString(16);
  let val = num1;
  return { val, text };
};

const algo = {
  square,
  cube,
  eins,
  bindec,
  hexdec,
  sqroot
};

export { shuffle, randomNumber, algo };
