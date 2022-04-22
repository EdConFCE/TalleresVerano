var x=document.querySelectorAll(".slide");
console.log(x.length);

function mostrar(){
    if(document.getElementById('t1')==null){
        mainMenuMostrar();
    }else
        pocosSlideMostrar();
}
function ocultar(){
    if(document.getElementById('t1')==null){
        mainMenuOcultar();
    }else
        pocosSlideOcultar();
}

function mainMenuMostrar(){
    document.getElementById('abrirMenu').style.visibility='hidden';
    document.getElementById('menu').style.visibility='visible';
    document.getElementById('cerrarMenu').style.visibility='visible';
}

function mainMenuOcultar(){
    document.getElementById('abrirMenu').style.visibility='visible';
    document.getElementById('menu').style.visibility='hidden';
    document.getElementById('cerrarMenu').style.visibility='hidden';
}

function pocosSlideMostrar(){
    document.getElementById('abrirMenu').style.visibility='hidden';
    document.getElementById('menu').style.visibility='visible';
    document.getElementById('cerrarMenu').style.visibility='visible';
    document.getElementById('el').style.zIndex="100";
    document.getElementById('mec').style.zIndex="100";
    document.getElementById('au').style.zIndex="100";
    document.getElementById('ren').style.zIndex="100";
    document.getElementById('cd').style.zIndex="100";

    for(let i=1;i<=x.length;i++){
        document.getElementById(`t${i}`).style.zIndex="-1";
    }
}

function pocosSlideOcultar(){
    document.getElementById('abrirMenu').style.visibility='visible';
    document.getElementById('menu').style.visibility='hidden';
    document.getElementById('cerrarMenu').style.visibility='hidden';
    document.getElementById('el').style.zIndex="-100";
    document.getElementById('mec').style.zIndex="-100";
    document.getElementById('au').style.zIndex="-100";
    document.getElementById('ren').style.zIndex="-100";
    document.getElementById('cd').style.zIndex="-100";

    for(let i=1;i<=x.length;i++){
        document.getElementById(`t${i}`).style.zIndex="1";
    }
}