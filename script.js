//Ha nem tesszük be egy functionba a kódunkat, hanem csak beírjuk a script fájlba akkor azzonnal le fog futni honlap betöltésekor
// alert("Ki itt belépsz hagyj fel minden reménnyel");

//A változók definiálásának 2 fajtája van a "var" és a "let"
// A var egy funkción belül bárhol elérhető, míg a let csak egy blokkon ({}-n belül) hivatkozható --> Akit érdekel 
//Itt definiáltuk minden függvényen kívül a screenHeight változót, ezáltal ez minden függvényben elérhető lesz.
//screenHeight értéke a megnyitott képernyő magassága pixelben
var screenHeight = document.documentElement.clientHeight;

function tryitout() {
    console.log("A megnyitott ablak magassága " + screenHeight + "px.");
    document.getElementById("solution0").innerHTML="Nyomd meg az F12-t és kattints fent a Console fülre.";
    //KÓD
}

function firstFunction() {

    let outputText = "";
    for (let i = 0; i < 100; i++) {
        outputText += i + " ";
    }
    outputText = "Sziasztok!"
    document.getElementById("solution1").innerHTML = outputText;

    
}
//Páros számok kiiratás úgy, hogy ellenőrizzük a 2-vel való oszhatóságot
function secondFunction_v1() {

    let outputText = "";
    for (let j = 0; j < 200; j++) {
        if (j%2 != 1) {
            outputText += j + " ";
        } 
    }
    document.getElementById("solution2").innerHTML = outputText;
}

//Páros számok kiiratás úgy, hogy 2-vel növeljük a ciklusváltozót
function secondFunction_v2() {

    let outputText = "";
    for (let j = 0; j < 200; j+=2) {
        outputText += j + " ";
    }
    document.getElementById("solution2").innerHTML = outputText;
}


//2 feltétel egymásba ágyazása
function thirdFunction_v1(){
    let outputText = "";
    for (let j = 0; j < 100; j+=1) {
        if (j%7 == 0) {
            if (j%3 == 0) {
                outputText += j + " ";
            }
        }
    }
    document.getElementById("solution3").innerHTML = outputText;
}

//2 feltétel 1 if-en belül
function thirdFunction_v2(){
    let outputText = "";
    for (let j = 0; j < 100; j+=1) {
        //Ha ÉS fetételt használunk a két feltétel közé &&-t kell tenni (VAGY feltétel esetén ||)
        if (j%7 == 0 && j%3 == 0) {
            outputText += j + " ";
        }
    }
    document.getElementById("solution3").innerHTML = outputText;
}
//Megjegyzés több feltételt is egmáshoz lehet kapcsolni zárójelezéssel Pl.: ((Feltétel1 && Feltétel2) || Feltétel3)

function fourthFunction() {
    var outputText = "Ezek:";
    var counter = 0;
    var tmp = 1;
    while (counter < 5){
        if(tmp%9 == 0){
            outputText += " " + tmp;
            counter++;
        }
        tmp++;
    }
    outputText += " .";
    document.getElementById("solution4").innerHTML = outputText;
}

function fifthFunction() {
    document.getElementById("bigDiv5").style.backgroundColor = "green";
}

function eightFunction() {
    document.getElementById("solution8").innerHTML = "<h1 class='akarmi'>Epstein didn't kill himspelf</h1>";
}

function ninthFunction() {
    var outputText = "Sütimegoldás:";
    for(var i=100;i>0;i--){
        if(i%6 == 0){
            outputText += " <span style='color:purple'>" + i + "</span>";
            continue;
        }

        if(i%3 == 0){
            outputText += " <span style='color:deeppink'>" + i + "</span>";
            continue;
        }

        if(i%2 == 0){
            outputText += " <span style='color:blue'>" + i + "</span>";
            continue;
        }
        outputText += " " + i;
    }


    document.getElementById("solution9").innerHTML = outputText;
}