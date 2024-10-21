document.getElementById("view-all-btn").addEventListener("click", function() {
    
    const cardContainer = document.getElementById("card-container");
    const existingNewCards = document.querySelectorAll(".new-card");

    if (existingNewCards.length > 0) {
       
        existingNewCards.forEach(card => card.remove());
    } else {
       
        const newCards = [
            { imgSrc: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", title: "Donut Hut", rating: "50", status: "Open Tomorrow" },
            { imgSrc: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", title: "Cake Shop", rating: "45", status: "Open Today" },
            { imgSrc: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", title: "Cookie Corner", rating: "30", status: "Open Tomorrow" },
            { imgSrc: "https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png", title: "Pie Place", rating: "55", status: "Open Today" }
        ];

        
        newCards.forEach(card => {
            const cardCol = document.createElement("div");
            cardCol.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4", "new-card"); 

            cardCol.innerHTML = `
                <div class="card">
                    <img src="${card.imgSrc}" class="card-img" alt="..." style="height: 16rem;">
                    <div class="row card-body">
                        <img src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/food-world.png" class="col-3 card-logo" alt="...">
                        <div class="col-9">
                            <h3 class="card-text">${card.title}</h3>
                            <p class="mt-2">* ${card.rating}</p>
                        </div>
                        <p class="mt-3 card-text-success">${card.status}</p>
                    </div>
                </div>
            `;

            cardContainer.appendChild(cardCol);
        });
    }
});



AOS.init();
$(".burger-menu").click(() => {
  $(".mobile-menu-box").toggleClass("open");
})




const sliderObj = {
  spaceBetween: 15,
  loop: true,
  mousewheel: true,
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}






var swiper = new Swiper(".mySwiper", sliderObj);