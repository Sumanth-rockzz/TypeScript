const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonElement=document.querySelector('button')!;
const numResults:Array<number>=[];
const textResults:string[]=[];

type NumOrString =number|string;
type result={val:number;timestamp:Date}

interface resultObj{
    val:number;
    timestamp:Date;
}

function add(num1:NumOrString ,num2:NumOrString ){

    if(typeof(num1) ==='number'&& typeof(num2) ==='number' )

    return num1+num2;

    else if(typeof(num1) ==='string'&& typeof(num2) ==='string' )

    return num1+num2;


    return +num1 + +num2;
}
function printresult(resultObj:result){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click',()=>{
        const num1=num1Element.value;
        const num2=num2Element.value;
       const  numresult=add(+num1,+num2);
       numResults.push(numresult as number);
       const stringresult=add(num1,num2)
       textResults.push(stringresult as string);
      printresult({val: numresult as number ,timestamp:new Date()});
      console.log(numResults,textResults);
})

const promise=new Promise<string>((resolve, reject) => {
setTimeout(()=>{
resolve("it worked")
},1000)   
})

 promise.then(result=>{
    console.log(result.split('w'));
 })
 .catch(err=>{
    console.log(err)
 })