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
  timeOutVar = setInterval(() => {
    carouselImgArr[currentImg].setAttribute("style", "display: none");
    currentImg++;
    if (currentImg >= carouselImgArr.length) {
      currentImg = 0;
    }
    carouselImgArr[currentImg].setAttribute("style", "display: block");
  }, 5000);
};

export const initCarousel = function () {
  assignImg();
  carouselImgArr[0].setAttribute("style", "display: block");
  nextImgOnTimeOut();
};
