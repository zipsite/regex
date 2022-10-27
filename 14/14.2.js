let str = '^xx axx ^zz bkk @ss';
console.log(str.match(/[^\s@^][A-Za-z]{2}/g));