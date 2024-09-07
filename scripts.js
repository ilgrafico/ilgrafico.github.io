$('audio').on('playing', function() {
    document.getElementById('loveMeDiv').style.display = "block";
    document.getElementById('player').style.display = "none";
});

//click yes btn
function clickYesButton() {
    // alert('I love you too <3');
    document.getElementById('loveMeDiv').style.display = "none";
    document.getElementById('imgLove').style.visibility = 'visible';
}

//move button on hover
function clickNoButton() {
    // random from 0 to 1, then multiply with screen size
    let x = Math.random() * (window.innerWidth-100);
    let y = Math.random() * (window.innerHeight-100);

    document.getElementById('no-button').style.position = "absolute";

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y +'px';
    
}