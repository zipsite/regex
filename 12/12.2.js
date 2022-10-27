let str = 'aba aea aca aza axa a.a a+a a*a';
console.log(str.match(/[^0-9A-Za-z]{3,7}+/g));