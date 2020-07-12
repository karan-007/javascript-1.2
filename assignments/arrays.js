const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code. 
/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/

//#1
function each(elements, cb) {
  for(i=0;i<elements.length;i++){
    cb(elements[i],i);
  }
}

each(items,function(n,i){
  console.log("num=",n," index=",i);
});


//#2
function map(elements, cb) {
  arr=[];
  for(let x of elements){
    arr.push(cb(x));
  }
  return arr;
}

map(items,function(n){
  return n*2;
});


//#3
function reduce(elements, cb) {
  let sum=0;
  for(let x of elements){
    sum=cb(sum,x);
  }
  return sum;
}

reduce(items,function(sum,n){
  return sum+=n;
})


//#4
function find(elements, cb) {
  for(let x of elements){
    if(cb(x)===true){
      return true
    }
  }
  return "undefined";
}

find(items,function(n){
  if(n===2){
    return true;
  }
})


//#5
function filter(elements, cb) {
  let result=[];
  for(let x of elements){
    if(cb(x)===true){
      result.push(x);
    }
  }
  return result;
}

filter(items,function(n){
  if(n%3===0){
    return true;
  }
})

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  let result=[];
  function flat(elements){
    for(let x of elements){
      if(Array.isArray(x)===false){
        result.push(x);
      }else{
        flat(x)
      }
    }
  }
  flat(elements);
  console.log(result)
}

flatten(arr);
