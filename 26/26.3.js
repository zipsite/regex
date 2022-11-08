let str = '31.12.2025 30.11.2024 29.10.2023';
console.log(str.replace(/(\d{2}).(\d{2}).(\d{4})/g, function(m0, m1, m2, m3) {
	return `${m3}-${m2}-${m1}`;
}));