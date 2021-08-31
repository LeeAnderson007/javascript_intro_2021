const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}
// I added in Taco3 to do question 13.)
const taco3 = {id:4, name:'pork', price:25, about:'So Tubular'}

const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
// 1. 
const updatedName = (id, newName) => {
    //find taco
    let taco = tacos.find((taco) => taco.id == id);
    console.log(taco);
    return{...taco,name: newName};
}

let updatedTaco = updatedName(1, "changed");
console.log("updatedName");
console.log(updatedTaco);


// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)
//2.)
const renderTaco = (taco) => {
    return (
        `<div>
            <h1>${taco.name}</h1>
        </div>`
    )
};

const callFunction = (func, taco) => {
    console.log(func(taco));
};


 callFunction(renderTaco, taco);



// write a function that takes an tacoOBJ and return formatted price with

// .00 


 //3.)

 const priceFormat = (taco) => {
     let newPrice = taco.price.toFixed(2);
     return newPrice;
     //or put it as 
     // return taco.price.toFixed(2);
 };

 console.log(priceFormat(taco));

// write a function that takes an tacoOBJ and return formatted price with

// .00 

//4.)

 const formattedPrice = (tacos) => {
     let decimalTacos = tacos.map(priceFormat);
     return decimalTacos;
 };
 console.log(formattedPrice(tacos))


 // create a new array where all of the prices is formatted with .00

//5.)
const tacosWithFormattedPrice = (tacos) => {
    return tacos.map((taco) => {
        return {...taco, price: taco.price.toFixed(2)};
    });
};

console.log(tacosWithFormattedPrice(tacos))

// write a function that takes an array and logs each item in the array

// hint forEach

//6.)

const getItems = () => {
    tacos.forEach((t) => {
        console.log(`${t.id}: ${t.name}`);
    });
};

getItems();


// use the find method to return the object with id:1

//7.)

    const tacoId = tacos.find((taco) => taco.id === 1);
    console.log("The Taco is", tacoId.name);
    


    // return a new array with all prices greater than 19
//8.)

const highPrice = tacos.filter(t => t.price > 19);
console.log('highPrice', highPrice);



// return a new array with a 'about' key where it is a combo of

// name price and about
//9.)
const getInfoArray = () => {
    return tacos.map((t) => {
        return `${t.name}: ${t.price} ${t.about}`;
    });
};

const info = getInfoArray();
console.log(info);


///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)


//10.)


// READ (array of obj to array of html) 


const getObjArray = () => {
    return tacos.map((t) => {
        return (`<div>
        <h1>${t.id}: ${t.name}: ${t.price} ${t.about}</h1>
    </div>`
    );
        //return `${t.name}: ${t.price} ${t.about}`;
    });
};

const obj = getObjArray();
console.log(obj);

// Update (update a taco) 

//11.)

const updateTacos = (id, updateName, updatePrice) => {
    return tacos.map((t) => (t.id === id ? {...t, name: updateName, price: updatePrice } : t));
}

const y = updateTacos(2, "Veggie", 45);
console.log(y);



// Remove (delete a taco) 
//12.)
//const deleteTaco = (id) => tacos.filter((t) => t.id !== id);   this is cleaner code 

const deleteTaco = (id) => {
    return tacos.filter((t) => {
        return t.id !== id;
    });
}

const x = deleteTaco(3);
console.log(x);



// Create (add a taco) 
// 13.)

let  addTaco= (taco) => {
    return [...tacos, taco]
};

let newTacos = addTaco(taco3);
console.log(tacos);
console.log(newTacos);










