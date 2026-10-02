
var Buut = document.querySelectorAll(".drum") ;



var sounds = [
            "sounds/crash.mp3",
            "sounds/kick-bass.mp3",
            "sounds/snare.mp3",
            "sounds/tom-1.mp3",
            "sounds/tom-2.mp3",
            "sounds/tom-3.mp3",
            "sounds/tom-4.mp3",
         ]
    

console.log(Buut);
 
for(let i=0 ;i<Buut.length ;i++){
    Buut[i].addEventListener("click",function (){
        var audio = new Audio(sounds[i])
        audio.play();
         
            
});
}
