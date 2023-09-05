// we use in to check if an Object has a property
// we use type predicate to return a boolean value

type fish = {swim:() => void};
type bird = {fly:() => void};


function returnAnimalType(animal:fish | bird) : animal is fish{
   return "swim" in animal ;
} 