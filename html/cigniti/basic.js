// [1 2 3 4 5]
let a=4;



console.log(a)

console.log(typeof(a))

let b 

// it is 'any' type

console.log(typeof(b))


b=234.56
console.log(typeof(b))


let c="java";
console.log(typeof(c));
console.log("bool")
let d=true;
console.log(typeof(d));
console.log(!d)

console.log("if-else");

const flag=true;

if(!flag)
{
    console.log("not satisfied");
}
else{
    console.log("condition satisfied");
}

i=0;
while(i<10){
    i++;
    console.log(i);
}

do{
    i++;
}while(i<10)
console.log(i);

for(let k=1;k<10;k++)
{
    if(k%2 == 0)
    {
        console.log(k);
    }
}

console.log("this is new")


let marks2=new Array(20,30,40,66,78,100);

var marks=[20,40,35,12,78,100]

console.log(marks[2]);

marks[3]=14

console.log(marks)

console.log(marks.length)

marks.push(65)

console.log(marks)

marks.pop();
console.log(marks)

marks.unshift(12)

console.log(marks)

marks.shift()

console.log(marks.indexOf(14))

console.log(marks.includes(120))

var sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i]
}

console.log("sum==> "+sum)

//reduce

total=marks.reduce((sum,mark)=>sum+mark,0)

console.log(total)

var scores=[12,13,14,15]

var evenScores=[]

for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
}

console.log(evenScores);
console.log("start")
//filter

let newFilterScore=scores.filter(score=>score%2 == 0)
console.log(newFilterScore)


//map

let mappedArray=newFilterScore.map(score =>score*3)
console.log("mapped")
console.log(mappedArray)



let totalVal=mappedArray.reduce((sum,val)=>sum+val)

console.log(totalVal)


var markSheet=[80,90,95,70,99]

var sumValue=markSheet.filter(score=>score%2 == 0)
.map(score=>score*3)
.reduce((sum,val)=>sum+val,0)

console.log("total: "+sumValue)


let fruits=['banana','mango','pomogrenate','apple']

fruits.sort()

console.log(fruits)
console.log(fruits.reverse())

// var markSheet=[80,90,95,70,99]
// markSheet.sort1(function(a,b){
//     return a-b
//  })

//  console.log(markSheet)
//  console.log(markSheet.sort1((a,b)=>a-b))
//  console.log(markSheet.sort1((a,b)=>b-a))


 function sum(a,b)
 {
    return a+b;
 }


let ans=sum(10,20);
console.log(ans);

sum=(a,b)=>a+b;