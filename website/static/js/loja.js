let papel = document.querySelector(".papel");
let plastico = document.querySelector(".plastico");
let metal = document.querySelector(".metal");
let vidro = document.querySelector(".vidro");

let materiais = document.querySelector("#materiais");
let materialPlastico = document.querySelector("#material_Plastico");
let materialPapel = document.querySelector("#material_Papel");
let materialMetal = document.querySelector("#material_Metal");
let materialVidro = document.querySelector("#material_Vidro");
let fecha = document.querySelector("#fechar");

function abrirPlastico(){
    materiais.style.display="block";
    materialPlastico.style.display="flex";
};
plastico.onclick = abrirPlastico;

function abrirPapel(){
    materiais.style.display="block";
    materialPapel.style.display="flex";
};
papel.onclick = abrirPapel;

function abrirMetal(){
    materiais.style.display="block";
    materialMetal.style.display="flex";
};
metal.onclick = abrirMetal;

function abrirVidro(){
    materiais.style.display="block";
    materialVidro.style.display="flex";
};
vidro.onclick = abrirVidro;

function fechar(){
    materiais.style.display="none";
    materialPapel.style.display="none";
    materialPlastico.style.display="none";
    materialMetal.style.display="none";
    materialVidro.style.display="none";
};
fecha.onclick = fechar;