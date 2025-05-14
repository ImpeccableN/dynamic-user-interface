import img1 from "./img/934269.jpg";
import img2 from "./img/fhXeBAL.jpg";
import img3 from "./img/Sunset-Beaches-Backgrounds.jpg"



const assignImg = function() {
    const imgArr = [img1, img2, img3];
    const carouselImgArr = Array.from(document.getElementsByClassName("carouselImg"));
    for(let i = 0; i < carouselImgArr.length; i++){
        carouselImgArr[i].src = imgArr[i];
    };
}

// const rotateImgOnTime = function() {

// }