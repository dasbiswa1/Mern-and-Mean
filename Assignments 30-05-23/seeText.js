const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const textarea = document.getElementById("content");

button1.addEventListener("click", ()=>{
    textarea.innerText="The Silicon Institute of Technology, Bhubaneswar (SIT-BBSR) is a NAAC Grade A grade engineering institution with NIRF 2021 rank of 163 in Bhubaneswar, the capital of Odisha, India. Established in 2001 as an affiliated college of the Utkal University, the college has been an affiliated college of Biju Patnaik University of Technology, since 2002";
})

button2.addEventListener("click", ()=>{
    textarea.innerText="";
})