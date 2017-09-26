//FORMA ANTIGUA
/*function lowercaser(input){
	return input.toLowerCase()
}
*/
//lowercaser recibe input y lo transforma a lowercase
const lowercaser =(input)=> {
	if(typeof input !== 'string'){
		throw('input is not a valid string')
	}
	return input.toLowerCase()
}

/*esto es lo  mismo de arriba pero con las llaves 
//const lowercaser = (input)=>{
	return input.tolowerCase
}
*/

module.exports = lowercaser