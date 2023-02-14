const buttonopen1 = document.getElementById("modalopen1");
const buttonopen2 = document.getElementById("modalopen2");
const buttonopen3 = document.getElementById("modalopen3");
const buttonopen4 = document.getElementById("modalopen4");
const buttonclose1 = document.getElementById("modal1");
const buttonclose2 = document.getElementById("modal2");
const buttonclose3 = document.getElementById("modal3");
const buttonclose4 = document.getElementById("modal4");
buttonopen1.addEventListener("click",() =>{
    modal1.style.display = "block";
});
buttonopen2.addEventListener("click",() =>{
    modal2.style.display = "block";
});
buttonopen3.addEventListener("click",() =>{
    modal3.style.display = "block";
});
buttonopen4.addEventListener("click",() =>{
    modal4.style.display = "block";
});
addEventListener("click",(e) =>{
    if(e.target == modal1){
        modal1.style.display = "none";
    }
    if(e.target == modal2){
        modal2.style.display = "none";
    }
    if(e.target == modal3){
        modal3.style.display = "none";
    }
    if(e.target == modal4){
        modal4.style.display = "none";
    }
})