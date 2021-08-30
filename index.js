
/**
 * Get Table For Graph
 * @param { Number } min Minimun Value
 * @param { Number } max Maximum Value 
 * @param { Number } inc Increment
 * @param { Function } fn Formula for Y 
 */
const getTable = (min, max, inc, fn) => {
	if (min > max) return console.error("{min} should be less than {max}");

	const tableItems = [];
	for (min; min < max; min += inc) {
		tableItems.push(
			{ x: min, y: fn(min) }
		);
	}

	console.table(tableItems);
}

getTable(
	-3.5,
	3.5,
	0.5,
	x => x**2 + 4*x + 10,
);
