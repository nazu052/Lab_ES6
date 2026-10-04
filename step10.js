const products = [
  { name: "Дэвтэр", price: 3500, inStock: true },
  { name: "Үзэг", price: 800, inStock: false },
  { name: "Цүнх", price: 45000, inStock: true },
];
 
// (1) nuutsgvi ehnii baraa
console.log(products.find((p) => !p.inStock));
// (2) 40,000aas doosh unetei baraa baigayu
console.log(products.some((p) => p.price > 40000));
// (3) buh baraa nuutstei yu
console.log(products.every((p) => p.inStock));
// (4) baraa bvriin ner
products.forEach((p) => console.log(p.name));
