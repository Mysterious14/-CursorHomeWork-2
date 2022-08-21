let NumberN;
while(!Number.isInteger(NumberN)){
    NumberN = +prompt("Enter your N (integer)");
    if(!Number.isInteger(NumberN)){
        alert("Enter correct values");
    }
    

    
}
let NumberM;
while(!Number.isInteger(NumberM)){
    
    NumberM = +prompt("Enter your M (integer)");
    
    if(!Number.isInteger(NumberM)){
        alert("Enter correct values");
        continue;
    }
    while(NumberN>=NumberM){
        NumberM = +prompt("I need M>N. Enter your M");
    }
}
const CheckParity = confirm("Skip even numbers?")
let result=0;
for(let i=NumberN; i<=NumberM; i++){
    if(CheckParity){
        !(i % 2) ? result:result+=i;
        
    }
    else result+=i;

}
alert(`Your N = ${NumberN}. Your M = ${NumberM}. Skip even numbers? ${CheckParity}. Your result = ${result}`);
console.log(`Your N = ${NumberN}. Your M = ${NumberM}. Skip even numbers? ${CheckParity}. Your result = ${result}`);
