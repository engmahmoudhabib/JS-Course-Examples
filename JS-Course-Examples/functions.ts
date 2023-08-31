

// Anonymous function

const myNames = ['Mahmoud', 'Mohammed', 'Habib'];
myNames.forEach((name) => console.log(name.toUpperCase()));


const myArr = [0, 'Hi', true];
myArr.forEach((element) => typeof (element) === "boolean" ?
    console.log(`${element} is Boolean`) :
    console.log(`${element} is Not Boolean`)
);


// object parameters
// point is an object has two fields

function printObjectFields(point: { x: number, y: number }): void {
    console.log(point.x);
    console.log(point.y);

}

printObjectFields({ x: 3, y: 6 });



// function with optional parameters

function sAyHiForTwoPersons(names: { fName: string, lName?: string }): void {
    console.log(`Hi ${names.fName}`);
    names.lName === undefined ?
        console.log(`Please Provide me your last name`) :
        console.log(`Hi ${names.lName}`);
 
    // you can ulternatively use 
    // this syntax is  much saver 
    //console.log(`Hi ${names.lName?.toUpperCase()}`);
    
}

sAyHiForTwoPersons({ fName: 'Mahmoud' });