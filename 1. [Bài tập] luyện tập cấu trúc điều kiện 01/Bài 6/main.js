let tiLeTienHoaHong = 0
doanhSoBanHang = +prompt("Nhập doanh số bán hàng kiếm đc");
switch (true) {
    case doanhSoBanHang > 300:
        tiLeTienHoaHong = 25 / 100;
        alert("so tien kiem duoc la " + (doanhSoBanHang * tiLeTienHoaHong));
        break;
    case doanhSoBanHang > 200:
        tiLeTienHoaHong = 15 / 100;
        alert("so tien kiem duoc la " + (doanhSoBanHang * tiLeTienHoaHong));
        break;
    case doanhSoBanHang > 100:
        tiLeTienHoaHong = 10 / 100;
        alert("so tien kiem duoc la " + (doanhSoBanHang * tiLeTienHoaHong));
        break;

    default:
        tiLeTienHoaHong = 3 / 100;
        alert("so tien kiem duoc la " + (doanhSoBanHang * tiLeTienHoaHong));
        break;
}

