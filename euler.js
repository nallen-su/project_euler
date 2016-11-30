var multiples = function() {
	var x = document.getElementById("first_value").value;
	var sum = 0;
	var mult3 = 0;
	var mult5 = 0;
	for (var i=1; i<x; i++) {
		if (i%3 === 0) {
			mult3 = i;
		}
		if (i%5 === 0) {
			mult5 = i;
		}
		if (mult3 === mult5) {
			sum += mult3;
		} else {
			sum += mult3;
			sum += mult5;
		}

		mult3 = 0;
		mult5 = 0;
	}
	document.getElementById("result1").innerHTML = sum;
}

var fibonacci = function() {
	var sum = 2;
	var previous = 1;
	var current = 2;
	var next = 0;
	var fib = [];
	var input = document.getElementById("second_value").value;
	while (current <= input) {
		next = previous + current;
		previous = current;
		current = next;
		if (current <= input && current%2 === 0) {
			sum += current;
		}
	}
	document.getElementById("result2").innerHTML = sum;
};























