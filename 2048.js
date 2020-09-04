window.onload = init();
var arr = document.getElementsByClassName("element");
function right(){
    var can=false;
    var access = false;
    var k;
    var score = document.getElementById("score");
    for(var i=14; i>0; i-=4){
        access = false;
        for(var j=i; j>=i-2; j--){
            if(arr[j].innerHTML!==""){   //executes below lines of code if inner element is not empty
                k=j;
                while(k<(i+1) &&
                (parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) || arr[k+1].innerHTML==="") ){ //15 = 14 or 15
                    if( parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){   //if 15 === 14
                        arr[k+1].innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(arr[k].innerHTML);    //15 = 15 + 14 (add 15 and 14 element and store in 15th element)
                        score.innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(score.innerHTML);     // update score with added elements
                        arr[k].innerHTML=""; can=true;access=true;    // empty 14 element 
                    }                                                                                                     //else part if inner element is empty 
                    else if( parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){access===false;} // fill the empty box with 14th element
                    else if(arr[k+1].innerHTML===""){arr[k+1].innerHTML=parseInt(arr[k].innerHTML);  // 14th box inner will goes into 15th 
                        arr[k].innerHTML=""; can=true;           // empty the 14th element inner
                    }
                    k+=1;
                }
            }
        }
        
    }
    if(can){av();}
}

function left(){                                //same logic as above to update the left side 
    var can=false;
    var access = false;
    var k;
    var score = document.getElementById("score");
    for(var i=13; i>0; i-=4){
        access = false;
        for(var j=i; j<=i+2; j++){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k>(i-(i%4)) && 
                (parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) 
                || arr[k-1].innerHTML==="")){
                    if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k-1].innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){access===false ;}
                    else if(arr[k-1].innerHTML===""){arr[k-1].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    if(can){av();}
}

function down(){                                       //logic for when  down arrow pressed
    var can=false;
    var access = false;
    var k;
    var score = document.getElementById("score");
    for(var i=11; i>7; i-=1){
        access = false;
        for(var j=i; j>=0; j=j-4){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k<12 && 
                (parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) 
                || arr[k+4].innerHTML==="")){
                    if( parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k+4].innerHTML=parseInt(arr[k+4].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k+4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k+4].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){access===false;}
                    else if(arr[k+4].innerHTML===""){arr[k+4].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k+=4;
                }
            }
        }
    }
    if(can){av();}    // if can is true average function executes
}

function up(){                 // uparrow pressed logic
    var can=false;
    var access = false;
    var k;
    var score = document.getElementById("score");
    for(var i=7; i>3; i-=1){
        access = false;
        for(var j=i; j<(i+9); j+=4){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k>=i && 
                (parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) 
                || arr[k-4].innerHTML==="")){
                    if( parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) && access===false ){
                        arr[k-4].innerHTML=parseInt(arr[k-4].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;access=true;
                        score.innerHTML=parseInt(arr[k-4].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k-4].innerHTML)===parseInt(arr[k].innerHTML) && access===true ){access===false;}
                    else if(arr[k-4].innerHTML===""){arr[k-4].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; can=true;
                    }
                    k-=4;
                }
            }
        }
    }
    if(can){av();}
}


// alert pop ups with score and gameover then resets everything after closing the alert
function end(){alert("Your Score Is:"+document.getElementById("score").innerHTML+" Game Over");reset();}

function random(){     //random function to get random number in empty place 
        var done=false;
        while(done===false){
            var num = Math.floor(Math.random()*16);
            if(arr[num].innerHTML===""){
                arr[num].innerHTML=2;
                done=true;
            }
        }
}
function av(){    // 
    var x = false;
    var count=0;
    for(var i=0; i<16;i++){
        if(arr[i].innerHTML===""){x=true;count++;}
    }
    if(x){random();}        // if x is true there is an empty box so it calls the random func to get random number
    if(count===1){check()}; // if x is false no need to execute random funct cuz box is having some number inside so then check funtion executes
}

function check(){  // it will check the  particular box  with its adjacent boxes inner is same or not from 0 to 15 boxes
    var x = false;
    for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(arr[1].innerHTML===arr[0].innerHTML||arr[4].innerHTML===arr[0].innerHTML){
                    x=true;    
                };
                break;
            case (1):
                if(arr[1].innerHTML===arr[0].innerHTML||arr[2].innerHTML===arr[1].innerHTML||arr[1].innerHTML===arr[5].innerHTML){ //
                    x=true;    //
                };
                break;
            case (2):
                if(arr[2].innerHTML===arr[1].innerHTML||arr[3].innerHTML===arr[2].innerHTML||arr[2].innerHTML===arr[6].innerHTML){
                    x=true; 
                };
                break;
            case (3):
                if(arr[3].innerHTML===arr[2].innerHTML||arr[3].innerHTML===arr[7].innerHTML){
                    x=true; 
                };
                break;
            case (4):
                if(arr[4].innerHTML===arr[0].innerHTML||arr[4].innerHTML===arr[8].innerHTML||arr[4].innerHTML===arr[5].innerHTML){
                  x=true;   
                };
                break;
            case (5):
                if(arr[5].innerHTML===arr[1].innerHTML||arr[5].innerHTML===arr[6].innerHTML||arr[4].innerHTML===arr[5].innerHTML||arr[5].innerHTML===arr[9].innerHTML){
                    x=true; 
                };
                break;
            case (6):
                if(arr[6].innerHTML===arr[5].innerHTML||arr[6].innerHTML===arr[2].innerHTML||arr[6].innerHTML===arr[7].innerHTML||arr[6].innerHTML===arr[10].innerHTML){
                    x=true; 
                };
                break;
            case (7):
                if(arr[7].innerHTML===arr[3].innerHTML||arr[7].innerHTML===arr[11].innerHTML||arr[7].innerHTML===arr[6].innerHTML){
                    x=true; 
                };
                break;
            case (8):
                if(arr[8].innerHTML===arr[4].innerHTML||arr[8].innerHTML===arr[12].innerHTML||arr[8].innerHTML===arr[9].innerHTML){
                    x=true; 
                };
                break;
            case (9):
                if(arr[9].innerHTML===arr[8].innerHTML||arr[9].innerHTML===arr[5].innerHTML||arr[9].innerHTML===arr[10].innerHTML||arr[9].innerHTML===arr[13].innerHTML){
                    x=true; 
                };
                break;
            case (10):
                if(arr[10].innerHTML===arr[9].innerHTML||arr[10].innerHTML===arr[11].innerHTML||arr[10].innerHTML===arr[6].innerHTML||arr[10].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
            case (11):
                if(arr[11].innerHTML===arr[7].innerHTML||arr[11].innerHTML===arr[15].innerHTML||arr[11].innerHTML===arr[10].innerHTML){
                    x=true; 
                };
                break;
            case (12):
                if(arr[12].innerHTML===arr[8].innerHTML||arr[12].innerHTML===arr[13].innerHTML){
                    x=true; 
                };
                break;
            case (13):
                if(arr[13].innerHTML===arr[12].innerHTML||arr[13].innerHTML===arr[9].innerHTML||arr[13].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
            case (14):
                if(arr[14].innerHTML===arr[13].innerHTML||arr[14].innerHTML===arr[10].innerHTML||arr[14].innerHTML===arr[15].innerHTML){
                    x=true; 
                };
                break;
            case (15):
                if(arr[15].innerHTML===arr[11].innerHTML||arr[15].innerHTML===arr[14].innerHTML){
                    x=true; 
                };
                break;
        }
    }
    if(!x){end();}  // if elemnts are not equal unable to add up further and all the boxes are filled so end function executes!!!
}

function init(){            // at initial splash id block displays i.e 2048 and new game
    var s = document.getElementById("splash");
    s.style.display="block";
    var arr = document.getElementsByClassName("element");
    for(var i=0; i<16; i+=1){
        arr[i].innerHTML="";                // initially all boxes are empty
    }
    var control = document.getElementById("control");
    control.style.display="block";
    var score = document.getElementById("score"); 
    score.innerHTML=0;
}



function pause(){ // at pause control will not be displayed
    var pause = document.getElementById("pause");
    pause.style.display="block";
    var control = document.getElementById("control");
    control.style.display="none";  // control  block hidden
}
function reset(){ // reset button will calls the init funct i.e first page
    var pause = document.getElementById("pause");
    pause.style.display="none";
    init();
}
function start(){    // at start box is filled with 2 numbers at random places ...button= new game
  var splash = document.getElementById("splash");
  var game = document.getElementById("game");
  splash.style.display="none"; // div id= splash  is hidden 
  game.style.display="block"; //div id = game is displayed
  random(); //random number
  random(); //random number
  
}
function resume(){          // button = continue
    var pause = document.getElementById("pause");
    pause.style.display="none";
    var control = document.getElementById("control");
    control.style.display="block";
}

window.addEventListener("keydown", function(e){   // mapping the arrow keys with the left right up down functions respectively
    if(e.code=="ArrowLeft"){left();}
    else if(e.code=="ArrowRight"){right();}
    else if(e.code=="ArrowUp"){up();}
    else if(e.code=="ArrowDown"){down();}
})