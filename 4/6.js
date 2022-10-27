let str = '[abc] {abc} abc (abc) [abc]';
console.log(str.replace(/\[\w+\]/g, "[!]"));