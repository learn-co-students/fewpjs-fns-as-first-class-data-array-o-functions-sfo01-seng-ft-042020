function wakeDog(dogName, dogBreed) {
    let line = `Wake ${dogName} the ${dogBreed}`
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return line
  }


  function leashDog(dogName, dogBreed) {
    let leash = `Leash ${dogName} the ${dogBreed}`

    console.log('Leash ${dogName} the ${dogBreed}');

    return leash 


  }

  function walkToPark(dogName, dogBreed){
      let walk = `Walk to the park with ${dogName} the ${dogBreed}`

      console.log(`${walk}`)
        return walk
    }

    function throwFrisbee(dogName, dogBreed){
        let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`

        console.log(`${frisbee}`)
        return frisbee
    }

    function walkHome(dogName, dogBreed){
        let home = `Walk home with ${dogName} the ${dogBreed}`
        console.log(`${home}`)
        return home
    }

    function unleashDog(dogName, dogBreed){
        let unleash = `Unleash ${dogName} the ${dogBreed}`
        console.log(`${unleash}`)
        return unleash
    }

    let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

    function exerciseDog(dogName, dogBreed) {
        routine = routine.map(action => action(dogName, dogBreed))
        return routine
      }