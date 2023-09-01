


type numberOrString = {
    num: number,
    str: string,
}

type numOrNumArray = number | number[];


function logNumberOrString(nos: numberOrString): void {
    console.log(`number is ${nos.num}`);
    console.log(`string is ${nos.str}`);

}


logNumberOrString({num:4 , str : 'Mahmoud'})