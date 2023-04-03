
    const slike = {
    2:'./karte/2_of_clubs.png',
    3:'./karte/3_of_diamonds.png',
    4:'./karte/4_of_hearts.png',
    5:'./karte/5_of_diamonds.png',
    6:'./karte/6_of_hearts.png',
    7:'./karte/7_of_spades.png',
    8:'./karte/8_of_spades.png',
    9:'./karte/9_of_diamonds.png',
    10:'./karte/10_of_clubs.png',
    1:'./karte/ace_of_spades.png'
    };


const myDiv = document.getElementById('igrac1'); 

var x="1";
var m="2";
let br1=0;
function dodaj1()
{
    dodaj();
    proveri();
}
function izvrsi1()
{
    izvrsi();
    proveri();
}
function dodaj()
{   
    br1++;
    let y= Math.round(Math.random()*(10-1)+1);
    if(document.getElementById("igrac").innerHTML=== "")
    {
        document.getElementById("igrac").textContent+="Karte:";
    }
    const newPhoto = document.createElement('img');
    newPhoto.setAttribute('id',x)
    newPhoto.src=slike[y];
    newPhoto.height=50;
    myDiv.appendChild(newPhoto);
    document.getElementById("igrac").textContent+= "+" + y;
    let z=document.getElementById("total").textContent;
    if(document.getElementById("total").innerHTML=== "")
    {
        z=y;
    }
    else
    {
        z=parseInt(z)+y;
    }
        document.getElementById("total").textContent=z;
        if(z>21)
            document.getElementById("kraj").textContent="Izgubio si!";
    x+="1";    
}

const myDiv1= document.getElementById('kuca1');
function izvrsi()
{
    let y;
    let k=0;
    let br=0;
    
    if(document.getElementById("kuca").innerHTML=== "")
    {
        document.getElementById("kuca").textContent+="Karte kuce:";
    }
    while(k<17)
    {
        y=Math.round( Math.random()*(10-1)+1);
        k+=y;
        const newPhoto1 = document.createElement('img');
        newPhoto1.setAttribute('id',m);
        newPhoto1.src=slike[y];
        newPhoto1.height=50;
        myDiv1.appendChild(newPhoto1);
        document.getElementById("kuca").textContent+= "+" + y;
        br++;
        m+="2";
    }
    if(k>21||(k<document.getElementById("total").textContent))
    document.getElementById("kraj").textContent="Pobedio si!";
    else
    document.getElementById("kraj").textContent="Izgubio si!";
    if(k==document.getElementById("total").textContent)
        {
            if(br1>=br)
                document.getElementById("kraj").textContent="Pobedio si!";
            else
                document.getElementById("kraj").textContent="Izgubio si!";
            }      
}
const button1=document.getElementById("new");
const button2=document.getElementById("end");
function proveri()  
{
    if(document.getElementById("kraj").innerHTML!="")
    {
        button1.disabled=true;
        button2.disabled=true;
    }
}


function new_game()
{
    document.getElementById("igrac").textContent="";
    document.getElementById("kuca").textContent="";
    document.getElementById("total").textContent="";
    document.getElementById("kraj").textContent="";
    document.getElementById("igrac1").innerHTML="";
    document.getElementById("kuca1").innerHTML="";
    button1.disabled=false;
    button2.disabled=false;
}
