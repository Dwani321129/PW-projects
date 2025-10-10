/*
Exe-1001
let A = parseInt(prompt(""));
let B = parseInt(prompt(""));
let X = A + B;

console.log("X =",X)
__________________________________
Exe-1002
let raio = parseInt(prompt());
let n = Math.PI.toFixed(5); <-- serve para saber o valor de pi
let a = Math.pow(2,raio); <-- serve para saber raio ao quadrado

let area = Math.PI.toFixed(5) * Math.pow(2,raio);

console.log("A =",area.toFixed(4))
___________________________________
Exe-1003
let a = parseInt(prompt())
let b = parseInt(prompt())
let c = a + b
console.log("Soma =",c)
___________________________________
Exe-1004
let A = parseInt(prompt());
let B = parseInt(prompt());
let P = A * B
console.log("PROD =", P);
*/

function mostrar01(){

    let cA = parseInt(document.querySelector(".valor-A").value);
    let cB = parseInt(document.querySelector(".valor-B").value);
    let prod = cA+cB;
    console.log(prod)
    document.querySelector(".resul").innerHTML = prod;
}

function mostrar02(){

    let raio = parseInt(document.querySelector(".valor-raio").value);
    let n = Math.PI.toFixed(5);
    let a = Math.pow(2,raio);

    let area = Math.PI.toFixed(5) * Math.pow(2,raio);
    console.log("A =",area.toFixed(4))

    document.querySelector(".resul1").innerHTML = area.toFixed(4)
}

function mostrar03(){

    let cA = parseInt(document.querySelector(".valor-1").value);
    let cB = parseInt(document.querySelector(".valor-2").value);
    let prod = cA*cB;
    console.log(prod)
    document.querySelector(".resul2").innerHTML = prod;
}

function mostrar04(){

    let cA = parseInt(document.querySelector(".valor-01").value);
    let cB = parseInt(document.querySelector(".valor-02").value);
    let prod = cA+cB;
    console.log(prod)
    document.querySelector(".resul3").innerHTML = prod;
}