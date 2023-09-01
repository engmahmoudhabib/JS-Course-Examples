// create new type from another types
function logNumberOrString(nos) {
    console.log("number is ".concat(nos.num));
    console.log("number is ".concat(nos.str));
}
logNumberOrString({ num: 4, str: 'Mahmoud' });
