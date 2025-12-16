let smallImgs = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImgs.length; i++){
    smallImgs[i].src = "spiderman_img.png";
    console.dir(`The value of image ${i} is changed`);
}

let allParas = document.getElementsByTagName("p");
console.log(allParas);