let firstbtn =document.getElementById("first")
let secbtn=document.getElementById("second")
let thirdbtn=document.getElementById("third")
let forthbtn=document.getElementById("fourth")
let imgcre=document.getElementById("pepimg")
let engpro=document.getElementById("eng-prof")
let engname=document.getElementById("name-of-eng")
let engcont=document.getElementById("content-of-eng")
first =function(){
    firstbtn.classList.add("activ-btn")
    secbtn.classList.remove("activ-btn")
    thirdbtn.classList.remove("activ-btn")
    forthbtn.classList.remove("activ-btn")
    engpro.innerHTML="Flight Engineer"
    engname.innerHTML="Anousheh Ansari"
   imgcre.src="assets/crew/image-anousheh-ansari.png"
    engcont.innerHTML="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."


}
second =function(){
    firstbtn.classList.remove("activ-btn")
    secbtn.classList.add("activ-btn")
    thirdbtn.classList.remove("activ-btn")
    forthbtn.classList.remove("activ-btn")
    engpro.innerHTML="Pilot Victor"
    engname.innerHTML="Glover Pilot"
    engcont.innerHTML="on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    imgcre.src="assets/crew/image-douglas-hurley.png"

}
third =function(){
    firstbtn.classList.remove("activ-btn")
    secbtn.classList.remove("activ-btn")
    thirdbtn.classList.add("activ-btn")
    forthbtn.classList.remove("activ-btn")
    engpro.innerHTML="Mission Specialist"
    engname.innerHTML="Mark Shuttleworth"
    engcont.innerHTML="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    imgcre.src="assets/crew/image-mark-shuttleworth.png"
}
fourth=function(){
    forthbtn.classList.add("activ-btn")
    firstbtn.classList.remove("activ-btn")
    secbtn.classList.remove("activ-btn")
    thirdbtn.classList.remove("activ-btn")
    engpro.innerHTML="Commander Douglas"
    engname.innerHTML="Hurley Douglas"
    engcont.innerHTML="Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    imgcre.src="assets/crew/image-victor-glover.png"

}
forthbtn.addEventListener("click",fourth())
secbtn.addEventListener("click",second())
thirdbtn.addEventListener("click",third())
firstbtn.addEventListener("click",first())
