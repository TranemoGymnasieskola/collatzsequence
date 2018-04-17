let stack    = [];

for (let i=1; i<100000; i++) {
	let n = i;
	while (n !== 1 && isntInArr(stack, n)) {
		if (n % 2 === 0) {
			n /= 2;
		} else {
			n *= 3;
			n++;
		}
		stack.push(n);
		stack.push(n*2);
		if (((n-1)/3) % 1 === 0) {
			stack.push((n-1)/3);
		}
		
	}
}
console.log(stack);

function isntInArr(arr, ele) {
	for (let i=0; i<arr.length; i++) {
		if (arr[i] === ele) {
			return false;
		}
	}
	return true;
}

