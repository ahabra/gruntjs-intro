describe('CarModel', function() {

	describe('createEmpty', function() {
		it('creates an object with "zeroed" property values', function() {
			var car = dealer.CarModel.createEmpty();

			expect(car.year).toBe(0);
			expect(car.manufacturer).toBe('');
		});

	});

});
