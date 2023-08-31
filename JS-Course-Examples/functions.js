// Anonymous function
var myNames = ['Mahmoud', 'Mohammed', 'Habib'];
myNames.forEach(function (name) { return console.log(name.toUpperCase()); });
var myArr = [0, 'Hi', true];
myArr.forEach(function (element) { return typeof (element) === "boolean" ?
    console.log("".concat(element, " is Boolean")) :
    console.log("".concat(element, " is Not Boolean")); });
// object parameters
// point is an object has two fields
function printObjectFields(point) {
    console.log(point.x);
    console.log(point.y);
}
printObjectFields({ x: 3, y: 6 });
// function with optional parameters
function sAyHiForTwoPersons(names) {
    var _a;
    console.log("Hi ".concat(names.fName));
    names.lName === undefined ?
        console.log("Please Provide me your last name") :
        console.log("Hi ".concat(names.lName));
    // you can ulternatively use 
    console.log("Hi ".concat((_a = names.lName) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
sAyHiForTwoPersons({ fName: 'Mahmoud' });
