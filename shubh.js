// 1.Find the Product.
const Find_Prod = (array, N) => 
{
 let product=1
 for(let i=0; i<N; i++)
 product= product*array[i]
 return product
};
 

// 2.Find the Sum
const Find_Sum = (array, N) => 
{
  let sum=0
  for (i=0; i<N; i++)
  sum= sum+array[i]
  return sum;
};
 
// 3.Count Occurrences
const findCount = (N, K, Arr) => 
{
  let count=0
  for (i=0; i<N; i++){
  if (Arr[i]==K){
    count+=1
  }
  }
  return count
};


// 4.Even Odd
const findEvenOdd = (N, Arr) => 
{
    let B=[2]
    let evensum=0
    let oddsum=0
    for (let i=0; i<N; i++){
      if (Arr[i] %2===0){
        evensum+=Arr[i]
      }
      else{
        oddsum+=Arr[i]
      }
    }
    B[0]=evensum
    B[1]=oddsum
    return B;
}

// 5.Find whether the number is present or not
const Find_Num = (array,N,M) => 
{
  for(let i=0; i<N; i++){
    if (array[i]===M){
      return "YES"
    }
  }
  return "NO"
  
};

// 6.Higher Age
const highAge = (N, Arr) => 
{
    let arr=[]
    let k=0
    for(i=0; i<N; i++){
      if(Arr[i]>=18){
        arr[k]=Arr[i]
        k=k+1
        
      }
    }
    return arr
};

// 7.Increment the Array Elements
const Inc_Arr = (array,N) => 
{
  let arr=[]
  let k=0
let jump= ""
for(i=0; i<N; i++){
  arr[k]= array[i]+1
  jump= jump+" "+arr[k]
  k++
}
console.log(jump)
};

// 8.Pass or Fail
const isAllPass = (N, Arr) => 
{
    let student=0
    for(let i=0; i<N; i++){
      if(Arr[i]>=32){
        student+=1
      }
      else{
        break;
      }
    }
    if(student===N){
      return "YES"
    }
    return "NO"
}


// 9.Unique Color Shirt
function Unique_Shirts (arr,N) {

    let jump= ""
    let dress=0;
    let i,k;
    for(i=0; i<N; i++){
      let compare=0;
      for(k=0; k<N; k++){
        if (arr[i]==arr[k]){
          compare++
        }
        
      }
      if (compare==1){
        jump=jump+arr[i]
        dress++
      }
    }
    return dress;
   }

//    10.Min and Max
function arrayMin(arr) {
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]<min)
        min=arr[i]
    }
       return min
  }
  
  function arrayMax(arr) {
   let max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]>max)
        max=arr[i]
    }
       return max
  
  }

//   11.Birthday Game
function Birthday_Game(arr,D ,M) {
 
    let counter = 0;
     for(let i = 0; i < arr.length - 1; i++){
          let subArray = arr.slice(i, i+M);
          if (subArray.length === M) {
             let sum = subArray.reduce((a,b) => a + b, 0);
             if(sum === D){
                  counter += 1;
              }
           }
     }
     return counter;
}