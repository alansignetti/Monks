let slider = document.querySelector(".slider__img");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const phraseOne = document.querySelector("#phraseOne");
const phraseTwo = document.querySelector("#phraseTwo");
const phraseThree = document.querySelector("#phraseThree");
const phraseFour = document.querySelector("#phraseFour");
const phraseFive = document.querySelector("#phraseFive");
const phraseSix = document.querySelector("#phraseSix");
const phraseSeven = document.querySelector("#phraseSeven");
const phraseEight = document.querySelector("#phraseEight");
const phraseNine = document.querySelector("#phraseNine");
const phraseTen = document.querySelector("#phraseTen");
 
// let phrases = document.querySelector(".slider__phrase");
let counter = 0;


// phraseOne.style.opacity = "1";
let phrases = document.getElementsByClassName('slider__phrase');


function HideAll(){ // except the first
    for (let i = 1; i < phrases.length; i++) {
        phrases[i].style.opacity = "0";
      }
    }
 
function Hide(phrase){
    phrase.style.transition = "opacity 1s";
    phrase.style.opacity = "0";
    }

function Show(phrase){
    phrase.style.transition = "opacity 0.5s";
    phrase.style.opacity = "1"; 
    
}


    btnLeft.style.display = 'none'
    HideAll(); 


function Next(){
    // let marginLeftSlider = slider.style.marginLeft;
    slider.style.transition = "all 1s";
    
    
    if(counter == 7){ 
        slider.style.marginLeft = "-450%";        
        counter ++;
        Show(phraseNine);   
        Hide(phraseEight);
    }   
    if(counter == 6){ 
        slider.style.marginLeft = "-360%";
        counter ++;
        Show(phraseEight);   
        Hide(phraseSeven); 
    }   
    if(counter == 5){ 
        slider.style.marginLeft = "-290%";
        counter ++;        
        Show(phraseSeven);   
        Hide(phraseSix); 
    }   
    if(counter == 4){ 
        slider.style.marginLeft = "-230%";
        counter ++;
        Show(phraseSix);   
        Hide(phraseFive); 
    }   
    if(counter == 3){ 
        slider.style.marginLeft = "-170%";        
        counter ++;
        Show(phraseFive);   
        Hide(phraseFour); 
    } 
    if(counter == 2){ 
        slider.style.marginLeft = "-100%";
        counter ++; 
        Show(phraseFour);   
        Hide(phraseThree);             
    }   
    if(counter == 1){ 
        slider.style.marginLeft = "-100%";
        counter ++; 
        Show(phraseThree);   
        Hide(phraseTwo);             
    }   
    if(counter == 0){ 
        slider.style.marginLeft = "-55%";
        counter ++;
        Show(phraseTwo);
        Hide(phraseOne);
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
    btnLeft.style.display = 'none'
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1.5s";
    counter = 0;
    HideAll();
}


btnRight.addEventListener('click',function(){
    Next();
    
});

btnLeft.addEventListener('click',function(){
    Previous();
});

// I add this autoplay functionality as an extra
// setInterval(function(){
//     Next();
// },5000)


