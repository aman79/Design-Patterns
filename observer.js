// this allows us to subscribe and unsubscribe to  certain  events and certain funcionality
// it gives subscription model. it notifies to dom to update certain elements.

function EventObserver() {
	this.observers = [];
}

EventObserver.prototype = {
	subscribe: function(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribe to ${fn.name}`);
	},

	unsubscribe: function(fn) {
		// Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.

		this.observers = this.observers.filter(function(item) {
			if (item != fn) {
				return item;
			}
		});
		console.log(`You are now unsubscribe to ${fn.name}`);
	},

	fire: function() {
		this.observers.forEach(function(item) {
			item.call();
		});
	}
};

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function() {
	click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
	click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
	click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
	click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
	click.fire();
});

const getCurMilliseconds = function() {
	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
	console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
