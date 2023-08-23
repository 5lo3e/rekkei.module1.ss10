let a = +prompt(" Nhập số a");
let b = +prompt(" Nhập số b");
let c = +prompt(" Nhập số c");
// max=0
// min=0
// if(a>b){
//     max = a;
//     min =b;
// }
// else{
//     max=b;
//     min=a;
// }
// if (c>max){
//     max=c;
// }
// else if(c<min){
//     min = c;
// }
// alert("max là " +max);
// alert("min là " +min);

// cách 2
if (a > b) {
    if (a > c) {
        max = a;
    }
    else {
        max = c;
    }
}
else {
    if (b > c) {
        max = b
    }

    else {
        max = c
    }
}
if (a < b) {
    if (a < c) {
        min = a;
    }
    else {
        min = c;
    }
}
else {
    if (b < c) {
        min = b
    }

    else {
        min = c
    }
}