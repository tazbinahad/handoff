$(document).ready(function () {
  // Fixed header on scrool down
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header-area').addClass('fixed-header');
      $('.hero-slider').addClass('mt-150');
      $('.top-header').addClass('hidden');
    } else {
      $('.header-area').removeClass('fixed-header');
      $('.hero-slider').removeClass('mt-150');
      $('.top-header').removeClass('hidden');

    }
  });

  // Home: Hero slider
  $('.hero-slider').slick({
    fade: true
  });


  // Import from ibos
  //selecting all required elements
  const filterItem = document.querySelector(".offer-product-content .items");
  const filterImg = document.querySelectorAll(
    ".offer-product-content .gallery .single-product-card"
  );

  if (filterItem) {
    window.onload = () => {
      //after window loaded
      filterItem.onclick = (selectedItem) => {
        //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) {
          //if- user selected item has .item class
          filterItem
            .querySelector(".active-class")
            .classList.remove("active-class"); //remove the active-class class which is in first item
          selectedItem.target.classList.add("active-class"); //add that active class on user selected item
          let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
          filterImg.forEach((image) => {
            let filterImges = image.getAttribute("data-name"); //getting image data-name value
            //if user selected item data-name value is equal to images data-name value
            //or user selected item data-name value is equal to "all"
            if (filterImges == filterName || filterName == "all") {
              image.classList.remove("hide"); //first remove the hide class from the image
              image.classList.add("show"); //add show class in image
            } else {
              image.classList.add("hide"); //add hide class in image
              image.classList.remove("show"); //remove show class from the image
            }
          });
        }
      };
    };
  }

});