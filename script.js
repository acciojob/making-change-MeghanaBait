const makeChange = (c) => {
  // your name here
	const p = 1; 
	const n = 5;
	const d = 10;
	const q = 25;


	let change = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };

	change.q = Math.floor(c/q);
	c -= change.q * q;

	change.d = Math.floor(c/d);
	c -= change.d * d;

	change.n = Math.floor(c/n);
	c -= change.n * n;

	change.p = c;
	
	return change;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
