(function (window){

var speakWord = "Good Bye";

var byspeaker={
  speak: function(name){
     console.log(speakWord + " " + name);
}
}
  
window.byspeaker=byspeaker;

 
})(window);
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
