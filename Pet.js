// pet = { type: { species, breed }, name, age, likes, toys: [] };

// pet = { type: { species, breed }, name, age, likes, toys: [], alive };

let lars = {
    id:1,
    type: { species: "K9", breed: "Lab" },
    name: "Lars",
    age: 10,
    likes: 100,
    toys: ["rocks", "balls"],
    alive: false,
  };
  
  let fuzzy = {
    id:2,
    type: { species: "Feline", breed: "black" },
    name: "Fuzzy",
    age: 8,
    likes: 101,
    toys: ["rubber band", "cat nip", "live mouse"],
    alive: false,
  };
  
  let daisy = {
    id:3,
    type: { species: "K9", breed: "Pitbull" },
    name: "Daisy",
    age: 7,
    likes: 1000,
    toys: ["chew toys", "laser pointer"],
    alive: false,
  };
  
  let kai = {
    id:4,
    type: { species: "canine", breed: "Border collie" },
    name: "Kai",
    age: 4,
    likes: 2,
    toys: ["balls", "rope toy", "treat ball toy"],
    alive: true,
  };
  let buster = {
    id:5,
    type: { species: "dog", breed: "beagle" },
    name: "Buster",
    age: 11,
    likes: 1000,
    toys: ["food", "bed"],
    alive: true,
  };
  
  let onyx = {
    id:6,
    type: { species: "mouse", breed: "fancy" },
    name: "Onyx",
    age: 1,
    likes: 12,
    toys: ["ball", "wheel", "cardboard tube"],
    alive: false,
  };
  
  let Buttercup = {
    id:7,
    type: { species: "dog", breed: "pitbull" },
    name: "Buttercup",
    age: 2,
    likes: 5,
    toys: ["shark", "ball", "bone"],
    alive: false,
  };
  let Persephone = {
    id:8,
    type: { species: "cat", breed: "tabby" },
    name: "Persephone",
    age: 1,
    likes: 9,
    toys: ["curtains", "mouse", "feather wand"],
    alive: true,
  };
  
  let Toad = {
    id:9,
    type: { species: "feline", breed: "calico" },
    name: "Toad",
    age: 1,
    likes: 100,
    toys: ["feather", "string"],
  };
  let Zoey = {
    id:10,
    type: { species: "K9", breed: "Mini Husky" },
    name: "Zoey",
    age: 6,
    likes: "3,000,0000,000",
    dislikes: "bright lights",
    toys: ["snake", "gorilla"],
    alive: true,
  };
  
  let Subaca = {
    id:11,
    type: { species: "K9", breed: "Mini Husky/Mini Aussie" },
    name: "Subaca",
    age: 3,
    likes: 30000000000,
    dislikes: "bright lights",
    toys: ["rope", "shoes", "bones", "anything that belongs to her mother"],
    alive: true,
  };
  
  let pets = [
    Toad,
    Persephone,
    Buttercup,
    onyx,
    buster,
    daisy,
    fuzzy,
    lars,
    Zoey,
    Subaca,
  ];

// we can't change any of the data above

// CRUD

  const addPet = (pet) => {
    return[...pets, pet];
};

    let newPets = addPet(Subaca);
    console.log(pets);
    console.log(newPets);

    //Update...not worry about type
   const updateAge = (id, newAge) => {
       //find the pet
       let pet = pets.find((pet) => pet.id == id);
       console/log(pet);
       return {...pet,age: newAge};
   };

   let updatePet = updateAge(1, 1000);
   console.log("updatedPet");
   console.log(updatedPet);

   // I want to update the age of one pet, but return the array with the updated pet in it
   //not going to use the function above...
   const updatePets = (id, newAge) => {
       return pets.map((p) => p.id === id ? {...p, age: newAge} : p);
   
    // let update = pets.map((pet) => {
    //     if (pet.id === id) {
    //         return {...pet, age: newAge};
    //     }
    //     return pet;
    // });
    };
   
    const y = updatePets (12, 10);
    console.log(y);
    
    // delete a pet
    //below is a cleaner version of code for more advanced
    const deletePet = (id) => pets.filter((p) => p.id !== id);

    // below is another way to wright the above const.
    //this version is good for beginners since it lets you see more of the code to learn what it does
    // const deletePet = (id) => {
    //     return pets.filter((p) => {
    //         return p.id !== id;
    //     });
    // };
   
    //list name of pets
    // -- if i just want to log the names of console use ->   forEach
    // -- if i want a array of the name use ->   Map
    const getNames = () => {
        pets.forEach((p) => {
            console.log(`${p.id}: ${p.name}`);
        });
    };
    // -- if i want a array of the name use ->   Map
    const getNamesArray = () => {
        return pets.map((p) => {
            return `${p.id}: ${p.name}`;
        });
    };

    const names = getNamesArray();
    console.log(names);

// List of different breeds and species
// grab a list of uniques species

// About pet ... log

    // Average age
    const getAverageAge = () =>{
        let ageSum = pets.reduce((ageAccum, pet) => {
            console.log(pet.age);
            return ageAccum + pet.age;
        }, 0);
        return ageSum /pets.length;
    };

    console.log(getAverageAge());

// get all alive pets

// list of all the toys

// crud toy/type

   // get a list of all different species using reduce...  others ways might include
   //forEach. Set

   const getDistinctSpecies = () => {
      return pets.reduce((accum, pet)=> {
        //add the console.logs to test and debug, then comment it or delete it
        // console.log(accum);
        // console/log(pet);
        // Want to check does accum contain pet.species
        return accum.includes(pet.type.species) ? accum : [...accum, pet.type.species];
        //or you can right whats listed below, its just not as clean as above
        // if(accum.includes(pet.species)) {
        //     return accum;
        // }
        // return [...accum, pet.type.species()];
    }, []);
   };
   console.log(getDistinctSpecies());

   // EXAMPLE of aother way to write the code
//    const getDistinctSpecies1 = () => {
//        return [... new Set(pets.map((p) => p.type.species))];
//    };

//    console.log(getDistinctSpecies1());

//   pets.forEach((p) => {
//       console.log(
//           `type:${p.type} ${p.name} ${p.age}, ${p.likes} ${p.alive ${p.toys}`
//           );
//       });


//   }