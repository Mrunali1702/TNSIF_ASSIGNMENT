// function to edit the player name.

function edit(){
    var x=prompt("Type Player1 Name ");
    var y=prompt("Type Player2 Name ");
    var z=prompt("Type Player2 Name ");
    document.getElementsByClassName("name")[0].innerHTML=x;
    document.getElementsByClassName("name")[1].innerHTML=y;
    document.getElementsByClassName("name")[2].innerHTML=z;
}

//function to play or roll the dice.

function play(){
    var x=(Math.floor(Math.random()*6))+1;
    var y=(Math.floor(Math.random()*6))+1;
    var z=(Math.floor(Math.random()*6))+1;

    var pictures=[];
    pictures[1]="<img src='dice1.png'>";
    pictures[2]="<img src='dice2.png'>";
    pictures[3]="<img src='dice3.png'>";
    pictures[4]="<img src='dice4.png'>";
    pictures[5]="<img src='dice5.png'>";
    pictures[6]="<img src='dice6.png'>";

    if(x==y && x==z){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("dice3").innerHTML=pictures[z];
        document.getElementById("result").innerHTML="MATCH DRAW ";
        document.getElementById("result").style.color="pink";
    
    }

    else if(x>y && x>z){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("dice3").innerHTML=pictures[z];
        document.getElementById("result").innerHTML= document.getElementsByClassName("name")[0].innerHTML+ " WINS";
        document.getElementById("result").style.color="pink";
    }
    else if(y>z && y>x){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("dice3").innerHTML=pictures[z];
        document.getElementById("result").innerHTML= document.getElementsByClassName("name")[1].innerHTML+ " WINS";
        document.getElementById("result").style.color="pink";
    }

    else{
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML=document.getElementsByClassName("name")[2].innerHTML +" WINS";
        document.getElementById("result").style.color="pink";
    }
}