// singleton object  immediate anonymous function that can return only one instance at a time.

//create one user per instance at a time , ex -login user for preventing creating users more than once.
//singleton gives to global point of access rather than bracing in encapsulation.

const Singleton = (function() {
	let instance;

	function createInstance() {
		const object = new Object({ name: 'amamma' });
		return object;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

//console.log(instanceA);
