import img1 from "./img/934269.jpg";
import img2 from "./img/fhXeBAL.jpg";
import img3 from "./img/Sunset-Beaches-Backgrounds.jpg";

const imgArr = [img1, img2, img3];
const carouselImgArr = Array.from(
  document.getElementsByClassName("carouselImg"),
);

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

export const initCarousel = function () {
  assignImg();
  carouselImgArr[0].setAttribute("style", "display: block");
  nextImgOnTimeOut();
  assignShowPrevImgToBtn();
  assignShowNextImgToBtn();
};

const assignShowPrevImgToBtn = function() {
  const prevImgBtn = document.querySelector("#prevImg");
  prevImgBtn.addEventListener("click", () => {
    clearInterval(timeOutVar);
    showPrevImg();
    nextImgOnTimeOut();
  });
};

const assignShowNextImgToBtn = function() {
  const prevImgBtn = document.querySelector("#nextImg");
  prevImgBtn.addEventListener("click", () => {
    clearInterval(timeOutVar);
    showNextImg();
    nextImgOnTimeOut();
  });
}

const showImg = function(imgNum){
  carouselImgArr[currentImg].setAttribute("style", "display: none");
  currentImg = imgNum;
  carouselImgArr[currentImg].setAttribute("style", "display: block");
}

const showNextImg = function(){
  if (currentImg === carouselImgArr.length - 1) {
      showImg(0)
    } else {
      showImg(currentImg + 1)
    }
}

const showPrevImg = function(){
  if (currentImg === 0) {
      showImg(2)
    } else {
      showImg(currentImg - 1)
    }
}