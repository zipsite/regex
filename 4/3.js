let str = '23 2+3 2++3 2+++3 345 567';
console.log(str.match(/\d(\+)+\d/g));