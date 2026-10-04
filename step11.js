const getAdultEmails = (users) =>
  users.filter((u) => u.age > 18).map((u) => u.email);
 
const getAdultLabels = (users) =>
  users
    .filter((u) => u.age > 18)
    .map(({ name, age }) => `${name} (${age})`);
 
const users = [
  { name: "Бат", age: 25, email: "bat@example.com" },
  { name: "Сараа", age: 17, email: "saraa@example.com" },
  { name: "Дорж", age: 30, email: "dorj@example.com" },
];
 
console.log(getAdultEmails(users));
console.log(getAdultLabels(users));
