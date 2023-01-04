///////////////////////////selections/////////////////////////////////////
let basket = document.querySelector(".basket");
let egg = document.querySelector(".egg");
let startposition = 0 ;
let position_of_egg =0 ;
//////////////////////////right and left events moving basket/////////////
window.onkeydown = function(evt){ 

    let key = evt.keyCode ;
    let basket = document.querySelector(".basket");
    let egg = document.querySelector(".egg");


    if ( key == 39)//right
    {
        if (startposition < (window.innerWidth-basket.width-40))
        {
         console.log("right");
         basket.style.left=startposition+100+"px";
         startposition=parseInt(basket.style.left);
         console.log(basket.style.left); 
        }
    }
    else if (  key == 37) //left
    {

        if (startposition > 0)
        {
         console.log("left"); 
         basket.style.left=startposition-100+"px";
         startposition=parseInt( basket.style.left);
         console.log(basket.style.left);
        }
    }
}

///////////////////////events happen onload like egg falling////////////////
window.addEventListener("load", function()
    {

        let basket = document.querySelector(".basket");
        let egg = document.querySelector(".egg");
        console.log("loading");
        random_x_position= Math.floor(Math.random() * window.innerWidth);
        document.images[0].style.left =random_x_position+"px";
        interval=setInterval(function(){
            egg.style.top = position_of_egg +"px";
            position_of_egg+=10;
         /////////////////////////lose//////////////////////////////////////////
            if (position_of_egg > (window.innerHeight-document.images[0].height))
            {
                console.log("stop here");
                clearInterval(interval);
                egg.src = "brokenegg.png";
        
            }

        /////////////////////////win when colliding ////////////////////////////////////////////
        if (isTouched(egg,basket))
        {
            console.log("touched");
            egg.style.visibility="hidden";
            clearInterval(interval);
        
        }


        },25) //end of setinterval ;

    }
);//end of load


//////////////////////////////////touch function ////////////////////////////////////////////
const isTouched = function (object1,object2)
{
   let returnValue = 0 ; 
    if(   object1.x < object2.x + object2.width &&
        object1.x > object2.x - object2.width &&
        object1.y < object2.y + object2.height &&
        object1.y > object2.y - object2.height) 
        {
            console.log("touched");
            returnValue = 1 ;
        }
    return returnValue;
}



