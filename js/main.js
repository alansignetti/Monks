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
 
let counter = 0;
let phrases = document.getElementsByClassName('slider__phrase');



 
 
// function Hide(phrase){
//     phrase.style.transition = "opacity 1s";
//     phrase.style.opacity = "0";
//     }

// function Hide(counter){ // except the first
    
//     for (i = 1; i < phrases.length; i++) {
//         if(counter == i){
//             phrases[i-1].style.opacity = "0";
//             phrases[i-1].style.transition = "opacity 0.5s";
//         }        
//       }
//     }

// function Show(counter){ // except the first

//     for (i = 1; i < phrases.length; i++) {
//         if(counter == i){
//             phrases[i].style.opacity = "1";
//             phrases[i].style.transition = "opacity 1s";
//         }        
//         }
//     }
function HideAll(){ // except the first
    for (let i = 1; i < phrases.length; i++) {
        phrases[i].style.opacity = "0";
        
        if(counter == 0)  {
            phrases[i].style.opacity = "0";            
            phrases[i].style.transition = "opacity 0s 0s ease-in-out";
            phrases[0].style.opacity = "1";
            phrases[0].style.transition= "opacity 0.3s 1.6s ease-in-out";
        }      
      }
    }
    
function HideAndShow(counter){ // except the first

    for (i = 1; i < phrases.length; i++) {
        if(counter == i){
            phrases[i-1].style.opacity = "0";
            phrases[i-1].style.transition = "opacity 0.3s ease-in-out";
            phrases[i].style.opacity = "1";
            phrases[i].style.transition = "opacity 0.5s 1.5s ease-in-out";            
        }        
        }
    }



    btnLeft.style.display = 'none' // hide left button from the begining
    HideAll(); // hide all phrases except the first


function Next(){
    // let marginLeftSlider = slider.style.marginLeft;
    slider.style.transition = "all 1.5s";
    
    if(counter == 8){ 
        slider.style.marginLeft = "-520%";        
        counter ++;
        HideAndShow(counter);  
    }   
    if(counter == 7){ 
        slider.style.marginLeft = "-450%";
        counter ++;
        HideAndShow(counter);  
    }  
    if(counter == 6){ 
        slider.style.marginLeft = "-450%";
        counter ++;
        HideAndShow(counter);  
    }   
    if(counter == 5){ 
        slider.style.marginLeft = "-360%";
        counter ++;        
        HideAndShow(counter);  
    }   
    if(counter == 4){ 
        slider.style.marginLeft = "-290%";
        counter ++;
        HideAndShow(counter);  
    }   
    if(counter == 3){ 
        slider.style.marginLeft = "-230%";        
        counter ++;
        HideAndShow(counter);  
    } 
    if(counter == 2){ 
        slider.style.marginLeft = "-170%";
        counter ++; 
        HideAndShow(counter);             
    }   
    if(counter == 1){ 
        slider.style.marginLeft = "-100%";
        counter ++;         
        HideAndShow(counter);          
    }   
    if(counter == 0){ 
        slider.style.marginLeft = "-55%";
        counter ++;
        btnLeft.style.display = 'block'
        HideAndShow(counter);  
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
    counter = 0;
    HideAll();
    btnLeft.style.display = 'none'
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1.5s";
    
    
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


