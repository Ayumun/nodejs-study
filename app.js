'use strict';
//宣言後の記述ミスをエラーとして表示してくれる機能を呼び出すための記述です。

const number = process.argv[2] || 0;
let sum = 0;
for(let i=1; i<=number;i++){
sum=sum+i;
}
console.log(sum);