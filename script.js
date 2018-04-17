let numTerms = 0;
let high  = 0;
let highN = undefined;
let sq    = [];
let initN;

for (let i=1000000; i>1; i--) {
	initN = i;
	let n = i;
	numTerms = 0;
	while (n !== 1) {
		if (n % 2 === 0) {
			n /= 2;
		} else {
			n *= 3;
			n++;
		}
		numTerms++;	
	} 
	if (numTerms > high) {
		high = numTerms;
		highN = initN;
	}
}

console.log('the longest sequece with a starting number below 1,000,000 was ' + high + ' starting on ' + highN + ' terms long with the sequence:');

while (highN !== 1) {
	sq.push(highN);
	if (highN % 2 === 0) {
		highN /= 2;
	} else {
		highN *= 3;
		highN++;
	}
} 
console.log(sq);