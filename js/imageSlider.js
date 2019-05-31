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

window.onload = function() {
  createThumbnails(images);
};

// let test = document.getElementById("thumbnailContainer");
// test.addEventListener("click", function() {
//   console.log(ims[0]);
// });
