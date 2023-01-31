'use strict';



var itemPrices = {
    twin: 139.99,
    queen: 159.99,
    king: 179.99
  };

var discountPrice = {
    twin: 104.99,
    queen: 119.99,
    king: 134.99
}

  var select = document.getElementById("duvetSize");
  var price = document.getElementById("priceOld");
  var newPrice = document.getElementById("priceNew");

  select.addEventListener("change", function() {
    var selectedValue = select.value;
    price.innerHTML = "$" + itemPrices[selectedValue];
    newPrice.innerHTML = "$" + discountPrice[selectedValue];
  });


  const images = ['images/duvet-covet-turquoise.jpeg', 'images/dct2.jpg', 'images/dct3.jpg'];
      let currentImageIndex = 0;

      function plusSlides(n) {
        currentImageIndex += n;

        if (currentImageIndex >= images.length) {
          currentImageIndex = 0;
        }

        if (currentImageIndex < 0) {
          currentImageIndex = images.length - 1;
        }

        document.getElementById('currentImage').src = images[currentImageIndex];
      }


      /* Mobile version*/

      const imagesM = ['images/dct1-mobile.jpg', 'images/dct2-mobile.jpg', 'images/dct3-mobile.jpg'];
      let currentMobileImageIndex = 0;

      function plusSlidesM(n) {
        currentMobileImageIndex += n;

        if (currentMobileImageIndex >= imagesM.length) {
          currentMobileImageIndex = 0;
        }

        if (currentMobileImageIndex < 0) {
          currentMobileImageIndex = imagesM.length - 1;
        }

        document.getElementById('currentImageM').src = imagesM[currentMobileImageIndex];
      }
