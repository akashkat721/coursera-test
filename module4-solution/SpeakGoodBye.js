(function (window){

var speakWord = "Good Bye";

var bySpeaker={
  speak: function(name){
     console.log(speakWord + " " + name);
}
}
  
window.bySpeaker=bySpeaker;

 
})(window);
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
