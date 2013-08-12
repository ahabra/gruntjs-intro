Namespace('dealer.User');

(function() {
	dealer.User.findAll = findAll;
	dealer.User.save = save;


	function findAll() {
		console.log('User:findAll()');
	}

	function save(user) {
		console.log('User:save()');
	}

})();
