let str = 'func1() func2() func3()';
console.log(str.match(/\w+(?=\(\))/g));