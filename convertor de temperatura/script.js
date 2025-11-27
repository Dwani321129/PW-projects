function celcius() {

    let c = parseInt(document.querySelector(".celso").value);

    document.querySelector(".kevin").value = c+273.15;
    document.querySelector(".fafa").value = (c*1.18)+32;



}

function Kelvin() {

    let k = parseInt(document.querySelector(".kevin").value);
    
    document.querySelector(".celso").value= k-273.15;
    document.querySelector(".fafa").value= (k-273.15*1.18)+32;


}

function FaFa() {

    let f = parseInt(document.querySelector(".fafa").value);
    
    document.querySelector(".celso").value= (f-32)/1.8;
    document.querySelector(".kevin").value= ((f-32)/1.8)+273.15;


}


