let edades = [20,38,14];
let edades2 = edades;

edades2.push(46);

console.log(edades2);

console.log(edades);

//Pasar por valor en arrays
//1º forma
let edades3 = [...edades2];
edades3.push(56);
console.log(edades3);
console.log(edades2);

//2º forma
let edades4 = Array.from(edades3);

edades4.push(231);

console.log(edades4);
console.log(edades3);

//Pasar por valor en objetos

/**
 * También se tienen dos formas
 * let objeto2 = {...objeto1}
 * 
 * let objeto2 = Object.assign({}, edades);
 */