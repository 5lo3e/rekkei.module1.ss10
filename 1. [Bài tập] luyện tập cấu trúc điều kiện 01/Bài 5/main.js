let endss = +prompt("Nhập điểm thi cuối kì");
let midss = +prompt("Nhập điểm thi giữa kì");
dtb = (endss ** 3 + midss ** 2) / 5;
switch (true) {
    case dtb < 5, 5:
        alert("học lực yếu");
        break;
    case dtb < 7, 9:
        alert("học lực khá");
        break;
    case dtb <=10:
        alert("học lực giỏi");
        break;
    default:
        alert("Nhập lại");
        break;
}
