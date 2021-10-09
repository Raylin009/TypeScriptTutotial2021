// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ray",
//   age: 24,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = "AUTHOR"};

const person = {
  name: 'Ray',
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log('is read only')
}