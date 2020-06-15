const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
	it('Si la palabra termina en ar, se le quitan esos dos carácteres', function() {
		const traslation = platzom("Programar")
		expect(traslation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
		const traslation = platzom("Zorro")
		const traslation2 = platzom("Zarpar")
		expect(traslation).to.equal("Zorrope")
		expect(traslation2).to.equal("Zarppe")
	})

	it('Si la palabra es mayor a 10 carácteres, debes partirlo a la mitad y unirlo con un "-"', function() {
		const traslation = platzom("abecedario")
		expect(traslation).to.equal("abece - dario")
	})

	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta se retorna la misma palabra intercalando Mayúsculas y Minúsculas', function() {
		const traslation = platzom("sometemos")
		expect(traslation).to.equal("SoMeTeMoS")
	})
})