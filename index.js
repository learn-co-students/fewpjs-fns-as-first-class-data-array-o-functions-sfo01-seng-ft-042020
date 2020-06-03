function wakeDog(name, breed) {
    let message = `Wake ${name} the ${breed}`;
    console.log(message);
    return message;
}

function leashDog(name, breed) {
    let message = `Leash ${name} the ${breed}`;
    console.log(message);
    return message;
}

function walkToPark(name, breed) {
    let message = `Walk to the park with ${name} the ${breed}`;
    console.log(message);
    return message;
}

function throwFrisbee(name, breed) {
    let message = `Throw the frisbee for ${name} the ${breed}`;
    console.log(message);
    return message;
}

function walkHome(name, breed) {
    let message = `Walk home with ${name} the ${breed}`;
    console.log(message);
    return message;
}

function unleashDog(name, breed) {
    let message = `Unleash ${name} the ${breed}`;
    console.log(message);
    return message;
}

// an array of functions
const routine = [
    wakeDog, 
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

// iterate over routine array and retrn an array of each activity
function exerciseDog(name, breed) {
    let activitiesArray = [];
    for(let i = 0; i < routine.length; i++) {
        let singleRoutine = routine[i](name, breed);
        activitiesArray.push(singleRoutine);
    }
    return activitiesArray;
}