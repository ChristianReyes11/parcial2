import { velocidad } from './velocidad';

describe('velocidad', () => {
	let vel: velocidad;
	
	beforeEach(() => {
		vel = new velocidad();
	});


	it ('deberia regresar 2 con los valores 10/5', () => {
		vel.velocidad(10,5);
		expect(vel.v).toBe(2);
	})
	it ('deberia regresar 3.2 con los valores 6.4/2.0', () => {
		vel.velocidad(6.4,2.0);
                expect(vel.v).toBe(3.2);
        })
	//xit ('deberia regresar error con valores 0/0', () => {
	//	vel.velocidad(0,0);
        //      expect(vel.v).toBe(0)
        //
        //})
	//xit ('deberia regresar error con d/0', () => {
	//	vel.velocidad(10,5);
        //      expect(vel.v).toBe(0);
        //})
	//xit ('deberia regresar 0 con 0/0', () => {
	//	vel.velocidad(0,0);
        //      expect(vel.v).toBe(0);
        //})
	//xit ('deberia calcular la velocidad con numeros enteros', () => {
//
  //      })

})
