let a =+prompt(" Số tiền gửi ngân hàng là: ");
let n =+prompt("Số năm gửi tiết kiệm ở ngân hàng là: ");
let i=+prompt("Lãi suất ngân hàng theo năm là ")

alert(`Số tiền lãi nhận được là ${(a*((1+i)**n)) - a}` )