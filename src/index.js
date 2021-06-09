var betPrice=0;

document.querySelectorAll('.number-button').forEach(function(event){
    event.addEventListener('click',function(e){
        if(e.target.style.backgroundColor=="red"){
            e.target.style.backgroundColor="#4CAF50";
            betPrice= betPrice-1;
            document.getElementById("bet-price-button").value=betPrice+"$";
        }else{
            e.target.style.backgroundColor="red";
            betPrice= betPrice+1;
            document.getElementById("bet-price-button").value=betPrice+"$";
        }
    })
})

document.querySelectorAll('.odd-even-button').forEach(function(event){
    event.addEventListener('click',function(e){
        if(e.target.style.backgroundColor=="red"){
            e.target.style.backgroundColor="#4CAF50";
            betPrice= betPrice-1;
            document.getElementById("bet-price-button").value=betPrice+"$";
        }else{
            e.target.style.backgroundColor="red";
            betPrice= betPrice+1;
            document.getElementById("bet-price-button").value=betPrice+"$";
        }
    })
})

document.querySelector('.bet-button').addEventListener('click',function(event){
    var result=Math.floor(Math.random() * 13);
})





