describe('CarController', function() {

	describe('canSell', function() {
		var canSell = dealer.CarController.canSell;

		it('cannot sell when no inventory', function() {
			var car = {
				manufacturer: 'Ford'
			};
			expect(canSell(car)).toBe(false);
		});

		it('cannot sell when low credit score', function() {
			var car = {
				manufacturer: 'GM'
			};
			var client = {
				name: 'Bob'
			};

			expect(canSell(car, client)).toBe(false);
		});

		it('cannot sell when offer is too low', function() {
			var car = {
				manufacturer: 'GM',
				price: 1000
			};
			var client = {
				name: 'Abdul'
			};

			expect(canSell(car, client, 700)).toBe(false);
		});

		it('can sell when enough inventory and good credit and good price', function() {
			var car = {
				manufacturer: 'GM',
				price: 1000
			};
			var client = {
				name: 'Abdul'
			};

			expect(canSell(car, client, 900)).toBe(true);
		});

	});

});
