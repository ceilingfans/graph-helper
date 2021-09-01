
/**
 * Get Table For Graph
 * @param { Number } min Minimun Value
 * @param { Number } max Maximum Value 
 * @param { Number } inc Increment
 * @param { Function } fn Formula for Y 
 */
const getTable = (min, max, inc, fn) => {
	if (!(typeof min === Number && typeof max === Number && typeof inc === Number && typeof inc Function)) {
		return console.error("Invalid Typing");
	}
	
	if (min > max) {
		const tmp = min;
		min = max;
		max = tmp;
		console.warn("Please ensure that {min} is less than {max} next time");
	}

	const tableItems = [];
	for (min; min <= max; min += inc) {
		tableItems.push(
			{ x: min, y: fn(min) }
		);
	}

	console.table(tableItems);
}

getTable(
	0,
	180,
	30,
	x => Math.sin(x),
);
