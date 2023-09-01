// unions is create type from two types 
var x = true;
function welcomePeople(people) {
    if (Array.isArray(people.people)) {
        return "welcome ".concat(people.people[0]);
    }
    else {
        return "welcome ".concat(people.people);
    }
}
console.log(welcomePeople({ people: ['Mahmoud'] }));
