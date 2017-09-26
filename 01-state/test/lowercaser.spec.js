const lowercaser = require('../lowercaser')

test('lowercaser deberia retornar un string en lowercaser',()=>{
	const actual = 'LOREN IPSUN'
	const expected = 'loren ipsun'

	expect(lowercaser(actual)).toBe(expected)
})

test('debería fallar cuando se ingresa un número',() =>{
	const actual = 1

	expect(() => {
		lowercaser(actual)
	}).toThrow()
})