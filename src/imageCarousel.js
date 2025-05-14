import img1 from "./img/934269.jpg";
import img2 from "./img/fhXeBAL.jpg";
import img3 from "./img/Sunset-Beaches-Backgrounds.jpg";

const imgArr = [img1, img2, img3];
const carouselImgArr = Array.from(
  document.getElementsByClassName("carouselImg"),
);
const dotsArr = Array.from(document.getElementsByClassName("controlDot"));

let timeOutVar;
let currentImg = 0;

const assignImg = function () {
  for (let i = 0; i < carouselImgArr.length; i++) {
    carouselImgArr[i].src = imgArr[i];
    carouselImgArr[i].setAttribute("style", "display: none");
  }
};

const nextImgOnTimeOut = function () {
  timeOutVar = setInterval(showNextImg, 5000);
};

const assignShowPrevImgToBtn = function () {
  const prevImgBtn = document.querySelector("#prevImg");
  prevImgBtn.addEventListener("click", () => {
    clearInterval(timeOutVar);
    showPrevImg();
    nextImgOnTimeOut();
  });
};

const assignShowNextImgToBtn = function () {
  const prevImgBtn = document.querySelector("#nextImg");
  prevImgBtn.addEventListener("click", () => {
    clearInterval(timeOutVar);
    showNextImg();
    nextImgOnTimeOut();
  });
};

const showImg = function (imgNum) {
  carouselImgArr[currentImg].setAttribute("style", "display: none");
  emptyDot();
  currentImg = imgNum;
  carouselImgArr[currentImg].setAttribute("style", "display: block");
  fillDot();
};

const showNextImg = function () {
  if (currentImg === carouselImgArr.length - 1) {
    showImg(0);
  } else {
    showImg(currentImg + 1);
  }
};

const showPrevImg = function () {
  if (currentImg === 0) {
    showImg(2);
  } else {
    showImg(currentImg - 1);
  }
};

const assignFunctionToDots = function () {
  for (let i = 0; i < dotsArr.length; i++) {
    dotsArr[i].addEventListener("click", () => {
      clearInterval(timeOutVar);
      showImg(i);
      nextImgOnTimeOut();
      dotsArr[i].classList.toggle;
    });
  }
};

const fillDot = function () {
  dotsArr[currentImg].classList.toggle("fa-regular");
  dotsArr[currentImg].classList.toggle("fa-solid");
};

const emptyDot = function () {
  dotsArr[currentImg].classList.toggle("fa-solid");
  dotsArr[currentImg].classList.toggle("fa-regular");
};

export const initCarousel = function () {
  assignImg();
  showImg(0);
  nextImgOnTimeOut();
  assignShowPrevImgToBtn();
  assignShowNextImgToBtn();
  assignFunctionToDots();
};
