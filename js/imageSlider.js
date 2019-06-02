"use-strict";

// Common Code
let images = ["001.jpg", "002.jpg", "003.jpg", "004.jpg"];
let selectedImageIndex = 0;
let baseUrl = window.location.href;
let imagesFolder = "images/";

// Image Slide 1
let goLeft = document.getElementById("leftNav");
goLeft.addEventListener("click", function() {
  selectedImage = images[selectedImageIndex - 1];
  if (selectedImage) {
    selectedImageIndex -= 1;
    updateSelectedImage(selectedImageIndex);
  }
});

let goRight = document.getElementById("rightNav");
goRight.addEventListener("click", function() {
  selectedImage = images[selectedImageIndex + 1];
  if (selectedImage) {
    selectedImageIndex += 1;
    updateSelectedImage(selectedImageIndex);
  }
});

function updateSelectedImage(selectedImageIndex) {
  let selectedImage = document.getElementById("selectedImage");
  let theImage = selectedImage.getElementsByTagName("img")[0];
  theImage.src = baseUrl + imagesFolder + images[selectedImageIndex];
}

// Image Slide 2
function createThumbnails(images) {
  let thumbnailContainer = document.getElementById("thumbnailContainer");

  images.forEach(function(image) {
    let imageThumb = document.createElement("img");
    imageThumb.src = baseUrl + imagesFolder + image;
    imageThumb.addEventListener("click", function() {
      updateMainImage(imageThumb.src);
    });
    thumbnailContainer.appendChild(imageThumb);
  });
}

function updateMainImage(imageURL) {
  let selectedImage = document.getElementById("mainImage");
  let theImage = selectedImage.getElementsByTagName("img")[0];
  theImage.src = imageURL;
}

// Image Slider 3
let carouselMainImageIndex = 0;
let slideRight = document.getElementById("rightContainer");
let slideLeft = document.getElementById("leftContainer");
slideRight.addEventListener("click", function() {
  rotateImges(1);
});

slideLeft.addEventListener("click", function() {
  rotateImges(-1);
});

function rotateImges(indexChange) {
  leftIndex = carouselMainImageIndex - 1;
  rightIndex = carouselMainImageIndex + 1;

  let leftImage = slideLeft.getElementsByTagName("img")[0];
  if (images[leftIndex + indexChange]) {
    leftImage.src = baseUrl + imagesFolder + images[leftIndex + indexChange];
  } else {
    leftImage.src = "";
  }

  let carouselMainContainer = document.getElementById("carouselMainImage");
  let carouselMainImage = carouselMainContainer.getElementsByTagName("img")[0];
  carouselMainImage.src =
    baseUrl + imagesFolder + images[carouselMainImageIndex + indexChange];
  carouselMainImageIndex += indexChange;

  let rightImage = slideRight.getElementsByTagName("img")[0];
  if (images[rightIndex + indexChange]) {
    rightImage.src = baseUrl + imagesFolder + images[rightIndex + indexChange];
  } else {
    rightImage.src = "";
  }
}

window.onload = function() {
  createThumbnails(images); // Image Slider 2
};
