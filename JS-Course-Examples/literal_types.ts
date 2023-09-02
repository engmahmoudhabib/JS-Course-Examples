

// stupid thing

let myLT: 'Hello' = 'Hello';


function logMyLT(lt: 'red' | 'green' | 'blue') {
    console.log(lt === 'red' ?
        `you choose ${lt}` :
        lt === 'green' ?
            `you choose ${lt}` :
            `you choose ${lt}`);

}


logMyLT('blue');