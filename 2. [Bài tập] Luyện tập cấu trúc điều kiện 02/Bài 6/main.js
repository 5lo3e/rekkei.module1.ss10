"use strict"
alert(" Phương trình bậc 1 có dạng ax+b =0");
let a =+prompt("Nhập a");
let b =+prompt("Nhập b");
if (a==0){
    alert("Phương trình vô nghiệm");
}
else{
    alert("Nghiệm của phương trình là "+(-b/a));
}