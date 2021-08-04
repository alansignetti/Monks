let slider = document.querySelector(".slider__img");
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const btnNav0 = document.querySelector("#li-0");
const btnNav1 = document.querySelector("#li-1");
const btnNav2 = document.querySelector("#li-2");
const btnNav3 = document.querySelector("#li-3");
const btnNav4 = document.querySelector("#li-4");
const btnNav5 = document.querySelector("#li-5");
const btnNav6 = document.querySelector("#li-6");
const btnNav7 = document.querySelector("#li-7");
const btnNav8 = document.querySelector("#li-8");
const btnNav9 = document.querySelector("#li-9");
const sliderComment = document.querySelector("#slider__comment");
const step = document.querySelector("#step-p");
let counter = 0;
let phrases = document.getElementsByClassName('slider__phrase');
let navbar = document.getElementsByClassName('nav__menu--item');
const navLength = (navbar.length)-2;

First();
HideAll(); // hide all phrases except the first
navbar[0].style.backgroundColor  = "transparent";

function HideAll(){ // except the first
    for (let i = 1; i < phrases.length; i++) {
        phrases[i].style.opacity = "0";     
        sliderComment.style.opacity = "0"; 
        sliderComment.style.transition= "opacity 0.3s ease-in-out";
        if(counter == 0)  {
            phrases[i].style.opacity = "0";            
            phrases[i].style.transition = "opacity 0s 0s ease-in-out";
            phrases[0].style.opacity = "1";
            phrases[0].style.transition= "opacity 0.3s 1.6s ease-in-out";
            sliderComment.style.transition= "opacity 0.3s 1.6s ease-in-out";
            sliderComment.style.opacity = "1";    
        }      
      }
    for (let i = 1; i < navbar.length; i++) {
        navbar[i].style.backgroundColor  = "transparent";   
        step.innerHTML = "";
        if(counter == 0)  {
            navbar[i].style.backgroundColor  = "transparent"; 
            navbar[0].style.backgroundColor  = "white";           
        }
        else if ( counter  != 9){  
        step.innerHTML = "Step "+ counter +" out of "+ navLength  +" on the path to digital enlightenment"

    }      
    }
}
    
function HideAndShow(counter){ // except the first

    for (i = 1; i < phrases.length; i++) {
        if(counter == i && counter <9){
            phrases[i-1].style.opacity = "0";
            phrases[i-1].style.transition = "opacity 0.3s ease-in-out";
            phrases[i].style.opacity = "1";
            phrases[i].style.transition = "opacity 0.5s 1.5s ease-in-out";    
            phrases[i+1].style.opacity = "0";
            phrases[i+1].style.transition = "opacity 0.3s ease-in-out";        
        }  
        if(counter > 0){
            phrases[0].style.opacity = "0";
            phrases[0].style.transition = "opacity 0.3s ease-in-out";         
        }  
        if(counter == 9){   
            phrases[i-1].style.opacity = "0";
            phrases[i-1].style.transition = "opacity 0.3s ease-in-out";
            phrases[9].style.opacity = "1";
            phrases[9].style.transition = "opacity 0.5s 1.5s ease-in-out";     
        }     
        }
    }




function Navbar(counter){ 

    for (i = 1; i < navbar.length; i++) {
        navbar[i].style.backgroundColor  = "transparent"; 
        if(counter == i){
            navbar[i-1].style.backgroundColor  = "transparent";  
            navbar[i].style.backgroundColor  = "white";     
            navbar[i].style.transition = "0.3s ease-in-out";      
        }
        if(counter > 0){
            btnLeft.style.display = 'block';
            btnRight.style.display = 'block';
            navbar[0].style.backgroundColor  = "transparent";            
        }
          
        if(counter ==9){
            btnRight.style.display = 'none';
            navbar[9].style.backgroundColor  = "white";              
        }  
    }
}

function Slide1(){
    slider.style.marginLeft = "-55%";
    counter = 1;
    btnLeft.style.display = 'block'
    HideAll();
    HideAndShow(counter); 
    Navbar(counter);      
}
function Slide2(){  
    slider.style.marginLeft = "-100%";
    counter = 2;   
    HideAll();      
    HideAndShow(counter);     
    Navbar(counter); 
}
function Slide3(){  
    slider.style.marginLeft = "-170%";
    counter = 3;   
    HideAll();
    HideAndShow(counter);
    Navbar(counter);  
}
function Slide4(){  
    slider.style.marginLeft = "-230%";        
    counter = 4;  
    HideAll();
    HideAndShow(counter);  
    Navbar(counter);  
}
function Slide5(){  
    slider.style.marginLeft = "-290%";
    counter = 5;  
    HideAll();
    HideAndShow(counter);
    Navbar(counter); 
}
function Slide6(){  
    slider.style.marginLeft = "-360%";
    counter = 6;     
    HideAll();     
    HideAndShow(counter);  
    Navbar(counter);
}
function Slide7(){  
    slider.style.marginLeft = "-450%";
    counter = 7;  
    HideAll();
    HideAndShow(counter);
    Navbar(counter);  
}
function Slide8(){  
    slider.style.marginLeft = "-450%";
    counter = 8;  
    HideAll();
    HideAndShow(counter);
    Navbar(counter);
}
function Slide9(){  
    slider.style.marginLeft = "-520%";        
    counter = 9;  
    HideAll();
    HideAndShow(counter); 
    Navbar(counter);
    btnRight.style.display = 'none';   
}

function Next(){
    // let marginLeftSlider = slider.style.marginLeft;
    slider.style.transition = "all 1.5s";
    
    if(counter == 8){ 
        counter ++;
        Slide9(); 
    }   
    if(counter == 7){ 
        counter ++;
        Slide8(); 
    }  
    if(counter == 6){ 
        counter ++;
        Slide7(); 
    }   
    if(counter == 5){ 
        counter ++;
        Slide6(); 
    }   
    if(counter == 4){ 
        counter ++;
        Slide5(); 
    }   
    if(counter == 3){ 
        counter ++;
        Slide4(); 
    } 
    if(counter == 2){
        counter ++; 
        Slide3();         
    }   
    if(counter == 1){ 
        counter ++;
        Slide2(); 
    }   
    if(counter == 0){ 
        counter ++;
        Slide1();
    }      
  
}
function Previous(){
    // let marginLeftSlider = slider.style.marginLeft;
    slider.style.transition = "all 1.5s";  
    btnRight.style.display = 'block';  
     
    if(counter == 1){
        counter --; 
        First();         
    } 
    if(counter == 2){
        counter --; 
        Slide1();         
    }  
    if(counter == 3){ 
        counter --;
        Slide2(); 
    } 
    if(counter == 4){ 
        counter --;
        Slide3(); 
    } 
    if(counter == 5){ 
        counter --;
        Slide4(); 
    } 
    if(counter == 6){ 
        counter --;
        Slide5(); 
    } 
    if(counter == 7){ 
        counter --;
        Slide6(); 
    }   
    if(counter == 8){ 
        counter --;
        Slide7(); 
    }   
    if(counter == 9){ 
        counter --;
        Slide8(); 
    }   
 
}



function First(){
    counter = 0;
    HideAll();
    btnLeft.style.display = 'none';
    btnRight.style.display = 'block';
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


// navigation

btnNav0.addEventListener('click',function(){
    First();
    });
btnNav1.addEventListener('click',function(){
    Slide1();
});
btnNav2.addEventListener('click',function(){
    Slide2();
});
btnNav3.addEventListener('click',function(){
    Slide3();
});
btnNav4.addEventListener('click',function(){
    Slide4();
});
btnNav5.addEventListener('click',function(){
    Slide5();
});
btnNav6.addEventListener('click',function(){
    Slide6();
});
btnNav7.addEventListener('click',function(){
    Slide7();
});
btnNav8.addEventListener('click',function(){
    Slide8();
});
btnNav9.addEventListener('click',function(){
    Slide9();
});



