// stupid thing
var myLT = 'Hello';
function logMyLT(lt) {
    console.log(lt === 'red' ?
        "you choose ".concat(lt) :
        lt === 'green' ?
            "you choose ".concat(lt) :
            "you choose ".concat(lt));
}
logMyLT('blue');
