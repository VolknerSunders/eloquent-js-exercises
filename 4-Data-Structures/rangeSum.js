const range = (sta, end, step = 1) => {
	let array = [];
	if (step >= 0) {
		for (let i = sta; i < end; i += step) array.push(i);
	} else {
		for (let i = sta; i > end; i += step) array.push(i);
	}
	return array;
}

const sum = (array) => {
	let sum = array.reduce((a, b) => a + b);
	return sum;
}

console.log(range(1,10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));