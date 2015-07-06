var mario = $("#mario");
var fond = $("#content");
var piece = $("#piece");

$(document).keydown(function(e){

    // Déplacement Droite
    if(e.keyCode == 39) {
        if(mario.css("left").slice(0, -2) < 600){
            console.log("mario"+mario.css("left").slice(0, -2));
            mario.css({left: "+=20px"});
        }
    }
    
    //Déplacement Gauche
    if(e.keyCode == 37) {
        if(mario.css("left").slice(0, -2) > 20){
            console.log("mario"+mario.css("left").slice(0, -2));
            mario.css({left: "-=20)x"});
        }
    }
    
    // sauter
    if(e.keyCode == 38) {
        $('#son')[0].play();
        mario.animate({top: "-=100px"});
        mario.animate({top: "+=100px"});
    }
    
    
//    if(e.keyCode == 38 || e.keyCode == 39){
//        $('#son')[0].play();
//        mario.animate({left: "+=50", top: "-=100px"});
//        mario.animate({left: "+=50", top: "+=100px"});
//    }
    
    // Bouger image
    if(mario.css("left").slice(0, -2) >= 600 && fond.css("backgroundPositionX").slice(0, -2) > -1660){
        fond.css({backgroundPositionX: "-=20"});
        console.log("fond"+fond.css("backgroundPositionX").slice(0, -2));
    }
    
    if(mario.css("left").slice(0, -2) == 350){
        piece.css({display: "none"});
        $('#son-piece')[0].play();
    }
    
    
    
});


    


