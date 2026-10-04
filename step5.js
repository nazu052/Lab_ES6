const defaults = { theme: "light", lang: "mn" };
const userSettings = { lang: "en" };
const merged = { ...defaults, ...userSettings };
console.log(merged);
 
const multiply = (...numbers) =>
  numbers.reduce((acc, n) => acc * n, 1);
console.log(multiply(2, 3, 4));
