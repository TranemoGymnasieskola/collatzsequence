let numTerms = 0;
let high  = 0;
let highN = undefined;
let sq    = [];

for (let n=1000000; n>1; n--) {
	let initN = n
	while (n !== 1) {
		if (n % 2 === 0) {
			n /= 2
		} else {
			n *= 3
			n++
		}
		numTerms++	
	} 
	if (numTerms > high) {
		high = numTerms
		highN = initN
	}
}

console.log('the longest sequece with a starting number of 1,000,000 was ' + high + ' terms long with the sequence:')

while (highN !== 1) {
	sq.push(highN);
	if (highN % 2 === 0) {
		highN /= 2
	} else {
		highN *= 3
		highN++
	}
} 
console.log(sq);