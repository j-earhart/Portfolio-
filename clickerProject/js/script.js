//initial number of cookies
var num = 0;


var camera = document.getElementById("camera");



function cameraClick() {
    num += 1;

    var numbers = document.getElementById("numbers");


    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;
    //automatic hobby upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Hobbist Level";
    }

    //automatic skilled upgrade to 10x
    if(num >= 400){
        num += 10;
        upgradeLevel.innerHTML = "Skilled Level";
    }

    //automatic artist upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Artist Level";
    }

    //automatic professional upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Professional Level";
    }
}
