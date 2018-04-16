var x = Math.round(Math.random()*100+1);
var spejimas;
var spejimuSkaicius=0;

function patikrinimas(){   
        var spejimas = document.getElementById("inputText").value;
        var numbers = /^[0-9]+$/;
        if (spejimas.match(numbers)){
            while(x!=spejimas){
                if (spejimas>100 || spejimas<1){
                    spejimuSkaicius++;
                    alert('Įvedėte skaičių ne iš sąlygoje nurodyto intervalo!!!');
                    break;          
                } else{
                    if (x>spejimas){
                        spejimuSkaicius++;
                        alert('Neatspėjote, mėginkite spėti didesnį skaičių');
                        break;
                    }else{
                        spejimuSkaicius++;
                        alert('Neatspėjote, mėginkite spėti mažesnį skaičių');
                        break;
                    }
                }    
           }
        }else{
            spejimuSkaicius++;
            alert('Prašome įvesti tik natūraliuosius skaičius nuo 1 iki 100');  
        }  
        if (x==spejimas){
            spejimuSkaicius++;
            document.getElementById('atsakymas').innerHTML= "<b>Spėjimas teisingas</b>. Atsakymas yra: <b>"+spejimas+ 
            "</b><br> Atspėjote iš <b>"+spejimuSkaicius+"</b> karto";
        }
    }

function myFunction() {
    location.reload();
}