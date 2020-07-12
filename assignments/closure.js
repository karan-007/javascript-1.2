//#1
var counterFactory = (function() {
  var counter = 0;
  return {
    increment: function() {
        return counter+=1;
    },
    decrement: function() {
        return counter-=1;
    }
  };   
})();


console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.decrement());


//#2
function limitFunctionCallCount(n,cb) {
  for(i=1;i<=n;i++){
    cb(i);
  }
}

limitFunctionCallCount(3,function cb(n){
  console.log("calling cb",n,"time")
})


//#3
function cacheFunction(cb) {
  arr=[1,4,3,4,1,5,5];
  cache={};
  for(let x of arr){
    if(cache[x]){
      console.log(cache[x],"cache");
    }else{
      let y=cb(x);
      cache[x]=y;
      console.log(y,"cb")
    }
  }
}

cacheFunction(function(n){
  return n*2;
})
