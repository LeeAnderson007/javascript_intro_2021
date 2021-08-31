const renderTaco = (taco) => {
    return (
        `<div>
            <h1>${taco.name}</h1>
        </div>`
    )
};

// const returnHello = () => {
//     return "hello"
// };

//sayHello ();

const callFunction = (func, taco) => {
    console.log(func(taco));
};

// const longThing = (thing) => {
//     console.log(thing);
// };

// const returnFunction = (func) => {
//     return func;
// };
const taco = {id:1, name:'chicken', price:20, about:'Yummy'}
 callFunction(renderTaco, taco);
