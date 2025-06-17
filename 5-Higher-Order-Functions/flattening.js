let arrays = [[1, 2, 3], [4, 5], [6]];

const flatten = (array) => {
	let newArray = array.reduce((flat, item) => flat.concat(item), []);
	console.log(newArray);
}

flatten(arrays);