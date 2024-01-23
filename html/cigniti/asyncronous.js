// synchronous means executikon in a sequence
// asynchronous means atatime it has lot to compute example threads,there will b correct flow
// in assyjnchronous there will be returning the PROMISE to the called the function like truje or false
const second=() =>{
    setTimeout(() =>{
        console.log('this is second function');
    },500);
    
}
const first=()=>{
    console.log('first functikok');
    second();
    console.log('last ending');
}
first();


//synchronous

const second1=() =>{
    
    console.log('second functikok');
}
const first1=()=>{
    console.log('first functikok');
    second1();
    console.log('last ending');
}
first1();