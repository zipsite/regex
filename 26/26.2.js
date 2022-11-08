let str = '123 456 789';
console.log(str.replace(/\d+/g, function(m0) {
	return [...m0].reverse().join('');
}));