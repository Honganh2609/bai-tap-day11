// Bài 1
let isOldNumber = function (number) {
  let so = prompt("Nhập 1 số nguyên bất kỳ");
  if (so % 2 == 0) {
    console.log(`${so} là số chẵn`);
  } else {
    console.log(`${so} là số lẻ`);
  }
};
isOldNumber();
// Bai 2
let maxOfTwo = function (a, b) {
  if (a > b) {
    console.log(`${a} là số lớn hơn`);
  } else {
    console.log(`${b} là số lớn hơn`);
  }
};
maxOfTwo(10, 15);
// Bài 4
let season = function (month) {
  if ((month = 12) || (month = 1) || (month = 2)) {
    console.log(`Tháng ${month} là mùa đông`);
  } else if ((month = 3) || (month = 4) || (month = 5)) {
    console.log(`Tháng ${month} là mùa xuân`);
  } else if ((month = 6) || (month = 7) || (month = 8)) {
    console.log(`Tháng ${month} là mùa hè`);
  } else if ((month = 9) || (month = 10) || (month = 11)) {
    console.log(`Tháng ${month} là mùa thu`);
  }
}
season(3)
//  bài 5
let trafficLight = function (light) {
  if ((light = "Red")) {
    console.log(`Dừng lại`);
  } else if ((light = "Yellow")) {
    console.log(`Giảm tốc độ và dừng lại`);
  } else if ((light = "Green")) {
    console.log(`Được phép di chuyển`);
  }
};
trafficLight("Red");
//  bài 1 level 2
let isLeafYear = function(year){
  if ((year % 4 == 0) && (year % 100 != 0)) {
    console.log (`${year} là năm nhuận`);
  }
  else {
    console.log(`${year} không là năm nhuận`);
  }
}
isLeafYear (2100)
// bai 2


let daysOfMonth = function(months) {
  if ((months = 1)&&(month = 3)&&(month = 5)&&(month = 7)&&(month = 8)&&(month = 10)&&(month = 12)) {
    console.log (`Tháng ${month} có 31 ngày`);
  }
  else if ((month = 4) || (month = 6) || (month = 9) || (month = 11)) {
    console.log (`Tháng ${month} có 30 ngày`);
  }
  else if ((month = 2) ) {
    console.log (`Tháng ${month} có 29 ngày`);
    }
  }
daysOfMonth (3)

// bai 3 
let calcGrade = function(point) {
  if (point < 4.0){
    console.log(`Xep loai F`);
  }
  else if (4<=point && point<5.5) {
    console.log(`Xep loai D`);
  }
  else if (5.5<=point && point<7.0) {
    console.log(`Xep loai C`);
  }
  else if (7<=point && point<8.5) {
    console.log(`Xep loai B`);
  }
  else if (8.5<=point) {
    console.log(`Xep loai A`);
  }
}
calcGrade(7.4)

let solveEquation = function(a,b,c){
  let delta = b*b - 4*a*c
if ((a = 0) && (b = 0)) {
  console.log(`Phương trình vo nghiệm`)
}
else if (a = 0) {
  console.log(`phương trình có một nghiệm là (${-b} / ${a})`)
}
else if ((a != 0) && (delta < 0)) {
  console.log(`Phương trình vô nghiệm`)
}
else if ((a != 0) && (delta >= 0)) {
  console.log(`Phương trình vô nghiệm`)
}
}
solveEquation (0, 0, 2)