

interface Point {
    x: number,
    y: number,
}


// we can extends interface but type aliases NOOOO
// type aliases example :

type Coordinates = {
    x: number,
    y: number,
}


interface ExtendedPoint extends Point { }

//! NOT ALLOWED
//type ExtendedCoordinates extends Coordinates = {}

//? INSTEAD WE USE
type ExtendedCoordinates = Coordinates & string;


//! ANOTHER IMPORTANT THING
//? INTERFACES CAN BE MODYFIED AFTER CREATION NOR TYPE ALIASES


// Example
//! NOT ALLOWED
//type Coordinates = {}


interface Point {
    z: number,
}


