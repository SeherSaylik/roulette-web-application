var betPrice=0;
var betNumbers=[];

document.querySelectorAll('.number-button').forEach(function(event){
    event.addEventListener('click',function(e){
        if(e.target.style.backgroundColor=="red"){
            e.target.style.backgroundColor="#4CAF50";
            betPrice= betPrice-1;
            betNumbers.pop(e.target.id);
            document.getElementById("bet-price-button").value=betPrice+"$";

        }else{
            e.target.style.backgroundColor="red";
            betPrice= betPrice+1;
            betNumbers.push(e.target.id);
            document.getElementById("bet-price-button").value=betPrice+"$";
            
        }
    })
})


var winStatus=false;
document.querySelector('.bet-button').addEventListener('click',function(event){
    var result=Math.floor(Math.random() * 13);
    //document.querySelector("#spin").style.display = 'block';
    betNumbers.forEach(compare);
    function compare(betNumber){
        
        if(parseFloat(betNumber)==result){
            window.open('/public/result.html?result='+result+'&status=win&amount=12$','betResult','width=500,height=500');
            winStatus=true;
        }
    }
    if(winStatus==false){
        window.open('/public/result.html?result='+result+'&status=lost&amount=','betResult','width=500,height=500');
    }
})





