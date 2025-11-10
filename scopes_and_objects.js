// TODO: Create a global variable called globalCount
let globalCount = 0;

// TODO: Create a function that demonstrates local scope
function localFunction() {
  let localCount = 10;
  console.log(localCount);

  return localFunction;
}

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    globalCount += 5;
    let localCount = 100;
    console.log("Inside modifyVariables - modified globalCount:", globalCount);
    console.log("Inside modifyVariables - modified localCount:", localCount);
}
modifyVariables();

console.log("After modifyVariables - globalCount:", globalCount);

// TODO: Create a Student constructor function
function ConstructorStudent(first, last, grade, age) {
  this.firstName = first;
  this.lastName = last;
  this.grade = grade;
  this.age = age;
  this.fullName = function(){
    return this.firstName + " " + this.lastName
  }
}

// TODO: Create several student instances
let student1 = new ConstructorStudent("Phoenix", "Chung", "78%", 20);
let student2 = new ConstructorStudent("Yaqoob", "Samsodien", "15%", 19);
let student3 = new ConstructorStudent("Tylor", "Mentor", "95%", 23);
let student4 = new ConstructorStudent("Taaraa", "Haron", "76%", 18);
let student5 = new ConstructorStudent("Toufeeq", "Farat", "100%", 23);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

// TODO: Create an object literal with nested properties
let individual = {
  firstName: "Phoenix",
  lastName: "Chung",
  age: "20",
  hairType: "Curly",
  hairColor: "Blonde",
  favoriteFood: "Pizza",
  hobbies: {
    sport: "Swimming",
    creativity: "Painting and Music",
  },
};

console.log(individual);
