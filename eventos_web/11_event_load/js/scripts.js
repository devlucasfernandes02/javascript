/*window.addEventListener("load", function() {
    
    console.log("Assine os nossos termos de uso");
})*/

window.addEventListener("beforeunload", function(e){
    this.event.returnValue = null;
});