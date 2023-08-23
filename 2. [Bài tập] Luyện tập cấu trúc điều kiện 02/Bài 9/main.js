"use strict"
let a =+prompt("Nhập số a");
let b =+prompt("Nhập số b");
let c =+prompt("Nhập số c");
if((a>0)&&(b>0)&&(c>0)&&(a+b>c)&&(b+c>a)&&(a+c>b)){
    alert("Đó là 3 cạnh của 1 tam giác");
}
else
alert("Đó ko phải 3 cạnh của 1 tam giác ");
