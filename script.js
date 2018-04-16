let terms = 0;
let high  = 0;
let highN = undefined;
let sq    = [];

for (n=1000000; n>1; n--) {
	while (n !== 1) {
		if (n % 2 === 0) {
			n /= 2
		} else {
			n *= 3
			n++
		}
		terms++	
	} 
	if (terms > high) {
		high = terms
		highN = n
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