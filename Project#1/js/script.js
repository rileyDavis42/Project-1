let answers = ["We focus on making meals with the best and freshest ingredients, like\n" +
"humanely-raised beef that is ground fresh each day, organic chicken,\n" +
"and Rockey Family Dairy\'s organic cream for our ice cream cones,\n" +
"sundaes and shakes.\n" +
"Our commitment to freshness and quality means higher prices than\n" +
"you\'d find at traditional fast-food burger chains. It also means food\n" +
"that tastes way better - because, well, it is.\n", "We source our humanely-raised, vegetarian-fed beef from local,\n" +
"family-owned ranches. We use an 85% to 15% protein to fat blend, a\n" +
"mixture of the lean protein and the marbling found on in a cut of steak\n" +
"for our ground beef. The mixture is ground daily, and thus, our\n" +
"burgers taste so amazing."];

function show(id){
    if(document.getElementById(id).innerHTML.length > 0){
        document.getElementById(id).innerHTML = "";
    }
    else{
        document.getElementById(id).innerHTML = getAnswer(id);
    }
}

function getAnswer(id){
    if(id === "a1"){
        return answers[0];
    }
    else if(id === "a2"){
        return answers[1];
    }
}

function burgers(){

}