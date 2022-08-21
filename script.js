let NumberN;
while(!Number.isInteger(NumberN)){
    NumberN = +prompt("Enter your N");
}
let NumberM;
while(!Number.isInteger(NumberM)){
    NumberM = +prompt("Enter your M");
}
const CheckParity = confirm("Skip even numbers?")
let result=0;
for(let i=NumberN; i<=NumberM; i++){
    if(CheckParity){
        !(i % 2) ? result:result+=i;
        
    }
    else result+=i;

}
alert(`Your result = ${result}`)
console.log(`Your result = ${result}`);
