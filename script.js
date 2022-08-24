let NumberN;
NumberN = +prompt("Enter your N (integer)");
while(!Number.isInteger(NumberN) || NumberN<0 || NumberN==''){
    alert("Enter correct values");
    NumberN = +prompt("Enter your N (integer)");

    
}
let NumberM;
NumberM = +prompt("Enter your M (integer)");
while(!Number.isInteger(NumberM) || NumberM<0 || NumberM==''){
    
    NumberM = +prompt("Enter your M (integer)");
    
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
