"use strict"
alert(" Phương trình bậc 2 có dạng ax^2 + bx + c =0");
let a =+prompt("Nhập a");
let b =+prompt("Nhập b");
    let c =+prompt("Nhập c");
    let delta=((b**2)-4*a*c);
console.log(delta);
switch (true) {
    case delta > 0:
        alert("Phương trình có 2 nghiệm lần lượt là " +(-b+Math.sqrt(delta))/(2*a) +" và "+(-b-Math.sqrt(delta))/(2*a));
        break;
    case delta == 0:
        alert("Phương trình có 2 nghiệm kép là "+(-b/a));
        break;
  
    default:
        alert("Phương trình vô nghiệm");
        break;  
}

