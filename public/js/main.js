/**
 navbar btns
 */
let navzero=document.getElementById("zero")
let navone=document.getElementById("one")
let navtwo=document.getElementById("two")
let navthree=document.getElementById("three")
/* destination button */
let planetName=document.getElementById("name-of-planet")
let plantContent=document.getElementById("contant-of-planet")
let planetDis=document.getElementById("Distance")
let planetTime=document.getElementById("time")
let planetImage=document.getElementById("planet-image")
/* button of planets */
let moonbtn=document.getElementById("moon")
let marsbtn=document.getElementById("mars")
let Europabtn=document.getElementById("europa")
let titanbtn=document.getElementById("titan")



zero=function(){
navzero.classList.add("activ")
navone.classList.remove("activ")
navtwo.classList.remove("activ")
navthree.classList.remove("activ")
    
}






 moon=function(){
    moonbtn.classList.add("activ")
    marsbtn.classList.remove("activ")
    Europabtn.classList.remove("activ")
    titanbtn.classList.remove("activ")
    planetImage.src="./assets/destination/image-moon.png"
    planetName.innerHTML="Moon"
    planetDis.innerHTML="384,400 km"
    planetTime.innerHTML="3 days"
    plantContent.innerHTML="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites"
}
mars=function(){
    marsbtn.classList.add("activ")
    moonbtn.classList.remove("activ")
    Europabtn.classList.remove("activ")
    titanbtn.classList.remove("activ")
    planetImage.src="./assets/destination/image-mars.png"
    planetName.innerHTML="Mars"
    plantContent.innerHTML="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    planetTime.innerHTML="9 months"
    planetDis.innerHTML="225 mil. km"
}
europa= function(){
    Europabtn.classList.add("activ")
    moonbtn.classList.remove("activ")
    marsbtn.classList.remove("activ")
    titanbtn.classList.remove("activ")
    planetImage.src="./assets/destination/image-europa.png"
    planetName.innerHTML="Europa"
    planetTime.innerHTML="3 years"
    planetDis.innerHTML="628 mil. km"
    plantContent.innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin"
}
titan =function(){
    titanbtn.classList.add("activ")
    marsbtn.classList.remove("activ")
    Europabtn.classList.remove("activ")
    moonbtn.classList.remove("activ")
    planetImage.src="./assets/destination/image-titan.png"
    planetName.innerHTML="Titan"
    plantContent.innerHTML="Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn"
    planetDis.innerHTML="1.6 bil. km"
    planetTime.innerHTML="7 years"
}


/* Crew page*/ 
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
marsbtn.addEventListener("click",mars())
Europabtn.addEventListener("click",europa())
titanbtn.addEventListener("click",titan())
moonbtn.addEventListener("click",moon())
firstbtn.addEventListener("click",first())
secbtn.addEventListener("click",second())