var compteurScore = function(score){
    var joueur1 = 0;
    var joueur2 = 0;
    for (var i = 0; i<score.length; i++ ) {
        if (score[i] === 1) {
            joueur1 = joueur1+ 1;
            console.log('incrementation joueur 1')
            console.log(joueur1)
        } else{
            joueur2 = joueur2 +1;
            console.log('incrementation joueur 2')
            console.log(joueur2)
        }
    }
    if (joueur1 > joueur2) {
        console.log("joueur 1 gagne avec " + joueur1+ "points" )
    }else if ( joueur2 > joueur1) {
        console.log ("joueur 2 gagne avec " + joueur2 + " points")
    }else {
         console.log("égalité :" + joueur1 + "points chacuns") 
        }
}
