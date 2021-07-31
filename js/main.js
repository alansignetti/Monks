let slider = document.querySelector(".slider__img");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
// let marginLeftSlider = slider.style.marginLeft;


function Next(){
    // let marginLeftSlider = slider.style.marginLeft;
    
    slider.style.marginLeft = "-60%";
    slider.style.transition = "all 0.5s";
    if(slider.style.marginLeft == "0%"){
        slider.style.marginLeft = "-60%";
        slider.style.transition = "all 0.5s";
    }      
   
    if(slider.style.marginLeft == "-60%"){
        slider.style.marginLeft = "-120%";
        slider.style.transition = "all 0.5s";
    }
    
    
    setTimeout(function(){
        slider.style.transition = "none";
        slider.style.marginLeft = "-60%";
    },500)
}

function Previous(){
    slider.style.marginLeft = "+60%";
    slider.style.transition = "all 0.5s";
    
}


btnRight.addEventListener('click',function(){
    Next();
    console.log(slider.style.marginLeft)
});

btnLeft.addEventListener('click',function(){
    Previous();
});
