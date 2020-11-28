new Swiper(".image-slader",{
    navigation:{
        nextE1: ".swiper-button-next",
        preveE1: ".swiper-button-prev"
    },
    pagination:{
        
        el:".swiper-pagination",
        
      
        clickable: true,
        dynamicBullets: true,
        

        type:"fraction",

    },
    scrollbar:{
el: ".swiper-scrollbar",
draggable:true,
    },
    keyboard:{
        enabled:true,
        onlyInViewoprt:true,
        pageUpDown:true,
    },
    autoHeight:true,
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
});