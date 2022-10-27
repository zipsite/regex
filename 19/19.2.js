let str = 'a1b c34d x567z';
let arr = str.match(/\d+/g);
let res = 0;

for (let i = 0; i < arr.length; i++) {
    res += +arr[i]

}
console.log(res);