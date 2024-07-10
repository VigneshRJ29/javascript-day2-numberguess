var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess===random){
        display("Congratulations!-"+ attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Too low");
    }
    else if(guess>random){
        display("Too high");
    }
});
function display(message){
    document.getElementById("msg").textContent=message};

