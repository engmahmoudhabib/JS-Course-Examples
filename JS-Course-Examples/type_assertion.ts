
// in tsx files
//const x = <string>55;

//! NOT ALLOWED
//const y = 55 as string;
const z = (55 as any) as string;

console.log(typeof(z));
