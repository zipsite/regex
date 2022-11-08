let str = 'aaa [2] bbb [3] ccc [12] ddd';
console.log(str.replace(/\[(\d+)\]/g, function(m0, m1) {
	return `[${m1*2}]`
}));