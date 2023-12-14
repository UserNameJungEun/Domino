const navMoreBtn = document.querySelector(".btn_more");
const subNav = document.querySelector(".sub_nav");
navMoreBtn.addEventListener("click", function () {
  subNav.classList.toggle("active");
});

const tabMenus = document.querySelectorAll(".menuTab");
const tabname = document.querySelector("#tab_name");
tabMenus.forEach(function (tabMenu) {
  tabMenu.addEventListener("click", function () {
    tabname.innerHTML = tabMenu.dataset.text;
    console.log(tabMenu.dataset.id);
    let id = tabMenu.dataset.id;
  });
});

// -----------------------------------------------------

// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",

//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     rewind: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// ------------------ /* menu_subTab */------------------

/* -----[haif]--------------------------- */
const leftPizza = document.querySelector(".left_pizza");
const rightPizza = document.querySelector(".right_pizza");
const selectPizza = document.querySelectorAll("menu_tab");
const select1Pizza = document.querySelector(".select_1");
const select2Pizza = document.querySelector(".select_2");
const selects = document.querySelectorAll(".select_pizza>select");

let array = [
  "RPZ001.png",
  "RPZ001B.png",
  "RPZ001U.png",
  "RPZ001Y.png",
  "RPZ001Z.png",
  "RPZ003.png",
  "RPZ003B.png",
  "RPZ003U.png",
  "RPZ003Y.png",
  "RPZ003Z.png",
  "RPZ005.png",
  "RPZ005B.png",
  "RPZ005U.png",
  "RPZ005Y.png",
  "RPZ005Z.png",
  "RPZ007.png",
  "RPZ007B.png",
  "RPZ007Y.png",
  "RPZ010.png",
  "RPZ010B.png",
  "RPZ010Y.png",
  "RPZ011.png",
  "RPZ011B.png",
  "RPZ011Y.png",
  "RPZ108.png",
  "RPZ109.png",
  "RPZ110.png",
  "RPZ111.png",
  "RPZ113.png",
  "RPZ114.png",
  "RPZ147.png",
  "RPZ147B.png",
  "RPZ147U.png",
  "RPZ147Y.png",
  "RPZ147Z.png",
  "RPZ148.png",
  "RPZ155.png",
  "RPZ155B.png",
  "RPZ155U.png",
  "RPZ155Y.png",
  "RPZ155Z.png",
  "RPZ156.png",
  "RPZ159.png",
  "RPZ159B.png",
  "RPZ159U.png",
  "RPZ159Y.png",
  "RPZ159Z.png",
  "RPZ160.png",
  "RPZ169.png",
  "RPZ169B.png",
  "RPZ169U.png",
  "RPZ169Y.png",
  "RPZ169Z.png",
  "RPZ170.png",
  "RPZ223.png",
  "RPZ223B.png",
  "RPZ223U.png",
  "RPZ223Y.png",
  "RPZ223Z.png",
  "RPZ224.png",
  "RPZ271.png",
  "RPZ271B.png",
  "RPZ271U.png",
  "RPZ271Y.png",
  "RPZ271Z.png",
  "RPZ272.png",
  "RPZ290.png",
  "RPZ290B.png",
  "RPZ290U.png",
  "RPZ290Y.png",
  "RPZ290Z.png",
  "RPZ291.png",
  "RPZ111.png",
  "RPZ113.png",
  "RPZ114.png",
  "RPZ147.png",
  "RPZ147B.png",
  "RPZ147U.png",
  "RPZ147Y.png",
  "RPZ147Z.png",
  "RPZ148.png",
  "RPZ155.png",
  "RPZ155B.png",
  "RPZ155U.png",
  "RPZ155Y.png",
  "RPZ155Z.png",
  "RPZ156.png",
  "RPZ159.png",
  "RPZ159B.png",
  "RPZ159U.png",
  "RPZ159Y.png",
  "RPZ159Z.png",
  "RPZ160.png",
  "RPZ169.png",
  "RPZ169B.png",
  "RPZ169U.png",
  "RPZ169Y.png",
  "RPZ169Z.png",
  "RPZ170.png",
  "RPZ223.png",
  "RPZ223B.png",
  "RPZ223U.png",
  "RPZ223Y.png",
  "RPZ223Z.png",
  "RPZ224.png",
];

select1Pizza.addEventListener("change", function () {
  // console.log(select1Pizza.options.selectedIndex);
  let num = select1Pizza.options.selectedIndex;
  // console.log(array[num]);
  // leftPizza.innerHTML ='<img src="./img/'+array[num]+'alt="">';
  leftPizza.innerHTML = `<img src="./img/${array[num - 1]}" alt="">`;
});

select2Pizza.addEventListener("change", function () {
  // console.log(select1Pizza.options.selectedIndex);
  let num = select2Pizza.options.selectedIndex;
  // console.log(array[num]);
  // leftPizza.innerHTML ='<img src="./img/'+array[num]+'alt="">';
  rightPizza.innerHTML = `<img src="./img/${array[num - 1]}" alt="">`;
});

// ----------------------2type pizza END-------------------

const sizeCheck = document.querySelector(".btn_size");
const sizeChoices = document.querySelectorAll(".btn_size>div");
document.querySelector("#large").classList.add("active");
sizeCheck.addEventListener("click", function (e) {
  let tar = e.target;
  sizeChoices.forEach(function (sizeChoice) {
    sizeChoice.classList.remove("active");
    if (tar == sizeChoice) {
      tar.classList.add("active");
    }
  });
});

// ---------------------------------증감
// btns.forEach(function (button_topping, i) {
//   button_topping.addEventListener("click", function (e) {
//     let t = e.target;
//     if (t == minusBtns[i]) {
//       minusFunc(t);
//     } else if (t == plusBtns[i]) {
//       plusFunc(t);
//     }
//   });
// });
// function minusFunc(t) {
//   // console.log(e.currentTarget.nextElementSibling.value);
//   const next = t.nextElementSibling;
//   if (next.value > 0) {
//     next.value--;
//   }
// }
// function plusFunc(t) {
//   // console.log(e.currentTarget.nextElementSibling.value);
//   const prev = t.previousElementSibling;
//   if (prev.value < 10) {
//     prev.value++;
//   }
// }
function incrementValue(id) {
  let toppingCountInput = document.getElementById(id);
  let currentValue = parseInt(toppingCountInput.value, 10);
  toppingCountInput.value = currentValue + 1;
}

function decrementValue(id) {
  let toppingCountInput = document.getElementById(id);
  let currentValue = parseInt(toppingCountInput.value, 10);
  if (currentValue > 0) {
    toppingCountInput.value = currentValue - 1;
  }
}
