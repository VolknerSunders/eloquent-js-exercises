let myArray = ["A", "B", "C"];

const reverseArray = (array) => {
	let newArray = [];
	for (let i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}

	return newArray;
}

let arrayValue = [1, 2, 3, 4, 5];

const reverseArrayInPlace = (array) => {
	for (let i = 0; i < array.length / 2; i++) {
		let first = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = first;
	}

	return array;
}

console.log(myArray);
console.log(reverseArray(myArray));
console.log(arrayValue);
console.log(reverseArrayInPlace(arrayValue));