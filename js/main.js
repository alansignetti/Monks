let slider = document.querySelector(".slider__img");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
// let marginLeftSlider = slider.style.marginLeft;
let counter = 0;

function Next(){
    // let marginLeftSlider = slider.style.marginLeft;
    slider.style.transition = "all 1s";
    if(counter == 6){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-520%";
        
        counter ++;
    }   
    if(counter == 5){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-450%";
        
        counter ++;
    }   
    if(counter == 5){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-360%";
        // slider.style.transition = "all 1s";
        counter ++;
    }   
    if(counter == 4){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-290%";
        // slider.style.transition = "all 1s";
        counter ++;
    }   
    if(counter == 3){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-230%";
        // slider.style.transition = "all 1s";
        counter ++;
    }   
    if(counter == 2){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-170%";
        // slider.style.transition = "all 1s";
        counter ++;
    }   
    if(counter == 1){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-100%";
        // slider.style.transition = "all 1s";
        counter ++;
    }   
    if(counter == 0){ //slider.style.marginLeft == "0%" && 
        slider.style.marginLeft = "-55%";
        // slider.style.transition = "all 1s";
        counter ++;
    }      
      
    
    // setTimeout(function(){
    //     slider.style.transition = "none";
    //     // if(counter == 0){
    //     // slider.style.marginLeft = "-60%";
    //     // }
    //     // if(counter == 1){
    //     //     slider.style.marginLeft = "-120%";
    //     // }
    // },500)
}

function Previous(){
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1.5s";
    counter = 0;
}


btnRight.addEventListener('click',function(){
    Next();
    
});

btnLeft.addEventListener('click',function(){
    Previous();
});
