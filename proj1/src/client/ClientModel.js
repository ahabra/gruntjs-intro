Namespace('dealer.Client');

(function() {
	dealer.Client.findAll = findAll;
	dealer.Client.save = save;
	dealer.Client.findCreditScore = findCreditScore;


	function findAll() {
		console.log('Client:findAll()');
	}

	function save(client) {
		console.log('Client:save()');
	}

	function findCreditScore(client) {
		// I can give myself perfect score ;)
		if (client.name === 'Abdul') return 900;
		return 300;
	}

})();
