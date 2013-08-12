Namespace('dealer.CarModel');

(function() {
	dealer.CarModel.findAll = findAll;
	dealer.CarModel.save = save;
	dealer.CarModel.createEmpty = createEmpty;
	dealer.CarModel.findInventoryCount = findInventoryCount;

	function findAll() {
		console.log('CarModel:findAll()');
	}

	function save(car) {
		console.log('CarModel:save()');
	}

	function createEmpty() {
		return {
			year: 0,
			manufacturer: '',
			model: '',
			price: 0
		};
	}

	function findInventoryCount(car) {
		if (car.manufacturer === 'GM') return 10;
		if (car.manufacturer === 'Toyota') return 5;
		return 0;
	}

})();
