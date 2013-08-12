Namespace('dealer.CarController');

(function() {
	dealer.CarController.canSell = canSell;

	function canSell(car, client, offer) {
		if (dealer.CarModel.findInventoryCount(car) === 0) {
			return false;
		}
		if (dealer.Client.findCreditScore(client) < 600) {
			return false;
		}

		if (offer < car.price * 0.8) {
			return false;
		}
		return true;
	}


})();
