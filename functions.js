const logHello = () => {
    console.log("Hello");
};

const returnHello = () => {
    return "hello"
};

//sayHello ();

const callFunction = (func, string) => {
    console.log(string);
    func();
};

const longThing = (thing) => {
    console.log(thing);
};

const returnFunction = (func) => {
    return func;
};

// callFunction(logHello, "string here");

// callFunction(logHello, returnHello);
// callFunction(logHello, "hello");
//longThing("yo");

callFunction(() => {
    console.log("word");
  }, "yo");

const x = returnFunction(logThing);
x("hello again");

const returnAnonFunction = () => {
    return (thing) => {
        console.log(thing);
    };
};

const y = returnAnonFunction();
y("Yoyo");


// NEW EXAMPLE BELOW !!!!!!!!!!!!!!!!!!!!!!!!

const add = (num1, num2) => {
    return num1 + num2;
  };
  
  const add1 = (num1, num2) => num1 + num2;
  
  const callFunctionWithParam = (func) => {
    console.log("here");
    console.log("func value is: ", func);
    func();
  };
  
  const logThing = (thing) => {
    console.log(thing);
    return 1;
  };
  
  const x = () => {
    return 1;
  };
  
  const returnFunc = () => logThing("hello");
  
  // I dont want to call log thing here, I want callFunctionWithParam to call it
  // and I need to pass a param
  // callFunctionWithParam(logThing("hello"));
  callFunctionWithParam(returnFunc);
  
  //doing anonymous
  callFunctionWithParam(() => logThing("hello"));
  callFunctionWithParam(x);



  //A NEW EXAMPLE BELOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let num_arr = [1, 2, 3, 4, 5, 6];

const isEven = (num) => {
  return num % 2 == 0;
};

console.log(isEven(2));
console.log(isEven(3));

// pass a named function
let evens = num_arr.filter(isEven);

// pass a anyonmous function
let odds = num_arr.filter((num) => {
  return num % 2 != 0;
});

// pass a anyonmous function cleaner way implict return
let odds1 = num_arr.filter((num) => num % 2 != 0);

console.log(evens);
console.log(odds);
console.log(odds1);

const returnFakeJSXString = (thing) => {
  return `<p>${thing}</p>`;
};

let folkFolks = ["peter", "paul", "mary"];

let strings = num_arr.map(returnFakeJSXString);
console.log(strings);

let strings1 = folkFolks.map(returnFakeJSXString);
console.log(strings1);

let strings2 = folkFolks.map((folk) => `<h1>${folk}</h1>`);
console.log(strings2);



// NEW OBJECT EXAMPLE BELOW !!!!!!!!!!!!!!!!!!!!!!!!
const person1 = { firstName: "peter", instrument: "voice guy" };
const person2 = { firstName: "paul", instrument: "bass guy" };
const person3 = { firstName: "mary", instrument: "guitar gal" };
// const person4 = { name: "mary", inst: "guitar gal" };

const logMember = (obj) => {
  console.log(`${obj.firstName} is the ${obj.instrument}`);
};

const logMember1 = (obj) => {
  // es5
  // const firstName = obj.firstName;
  // const instrument = obj.instrument;

  // es6 destrucing
  const { firstName, instrument } = obj;
  console.log(`${firstName} is the ${instrument}`);
};

// this function is expecting a obj {firstName, instrument}
const logMember2 = ({ firstName, instrument }) => {
  // es6 destrucing
  console.log(`${firstName} is the ${instrument}`);
};
// logMember2(person2);

let firstName = "James";
let instrument = "80s synth guy";

// const person4 = { firstName: firstName, instrument: instrument };

// if key and value have the same name i can shorth hand this
const person4 = { firstName, instrument };
logMember2(person4);

// changes the object
// person4.eyeColor = "blue";

// add eye color but not change the original obj
const blueEyeJames = { ...person4, eyeColor: "blue" };
console.log(person4);
console.log(blueEyeJames);

// update an attribu eye color but not change the original obj
const paulUpdate = { ...person2, firstName: "changes" };
console.log(person2);
console.log(paulUpdate);