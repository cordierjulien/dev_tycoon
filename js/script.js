console.log("Demarrage");
let coutM1;
let profitM1;
let prf;

debu();

function debu() {
    coutM1=1;
    profitM1=2;
    prf=0;
}

function clickquer() {
    coutM1 *= 1.3;
    profitM1 *= 1.2;
    prf=profitM1;
    console.log("prf ="+prf);
    console.log(coutM1.toFixed(2));
    coutM1=coutM1.toFixed(2);
    console.log(profitM1.toFixed(2));
    profitM1=profitM1.toFixed(2);
    $("#mach1").text(parseInt($("#mach1").text())+1);
    $("#sous").text((parseInt($("#sous").text())-coutM1).toFixed(0))
    $("#exp").text((parseInt($("#exp").text())+5));
    $("#cost").text(coutM1);
}

/*
$("#btnmach1").click(function(){
    //console.log("ici");
    console.log($("#mach1").text());
    
    coutM1 *= 1.3;
    profitM1 *= 1.2;
    console.log(coutM1.toFixed(2));
    coutM1=coutM1.toFixed(2);
    console.log(profitM1.toFixed(2));
    profitM1=profitM1.toFixed(2);
    $("#mach1").text(parseInt($("#mach1").text())+1);
    $("#sous").text((parseInt($("#sous").text())-coutM1).toFixed(2))
    $("#exp").text((parseInt($("#exp").text())+5))

});
*/


function animChiffre() {
    var h = document.getElementById("sous").innerHTML;
    //console.log(h);
    //console.log("prf ="+prf);
    h=parseInt(h)+parseInt(prf);
    document.getElementById("sous").innerHTML = h;
}
window.setInterval("animChiffre()", 1000);