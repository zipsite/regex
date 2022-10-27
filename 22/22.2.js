let str = 'sss site.ru zzz site.com kkk';
console.log(str.replace(/(\w+)\.(\w+)/g, '<a href="http://$&">$&</a>'));