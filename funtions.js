
function getRandNumber(){
    return Math.floor(Math.random()*(10-1))+1
}
var rand_number=getRandNumber()
var count=0



function show_result(){
    var number=document.getElementById("number_input_box").value
    var resultElement = document.getElementById("result");
    count++
    console.log(count)
    if(count<10){
        if(number<rand_number){
              
            resultElement.innerHTML="El numero que ingresaste es menor";
        }
        else if(number>rand_number){
            
            resultElement.innerHTML="El numero que ingresaste es mayor";
        }
        else if(number==rand_number){
            console.log("es igual")
            resultElement.innerHTML="El numero que ingresaste es igual";
        }
    }
    else{
        alert("has perdido :(")
    }
}   