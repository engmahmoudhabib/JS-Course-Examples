

// unions is create type from two types 

let x: boolean | string = true;

function welcomePeople(people: { people: string | string[] }): string {
    if (Array.isArray(people.people)) {
        return `welcome ${people.people[0]}`;
    }
    else {
        return `welcome ${people.people}`;
    }
}


console.log(welcomePeople({ people: ['Mahmoud'] }));
