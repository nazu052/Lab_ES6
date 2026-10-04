const students = [
  { name: "Бат", score: 85 },
  { name: "Сараа", score: 55 },
  { name: "Дорж", score: 72 },
];
 
const average =
  students.reduce((acc, s) => acc + s.score, 0) / students.length;
 
const passed = students
  .filter((s) => s.score > 60)
  .map((s) => s.name);
 
console.log(average.toFixed(2)); 
console.log(passed);        
