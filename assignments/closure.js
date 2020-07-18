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
   function invoke () {
     if(n>0){
       n=n-1;
       cb();
     }
  }
  return {invoke};
}
function cb () { console.log("Callback invoked") };
let n = limitFunctionCallCount(3,cb);
n.invoke();
n.invoke();
n.invoke();
n.invoke();
n.invoke();
n.invoke();



//#3
function cacheFunction(cb) {
  let cache={};
  function invoke(x){
    if(cache[x]){
      console.log("from cache");
      return cache[x];
    }else{
      let y=cb(x);
      cache[x]=y;
      console.log("from cb");
      return y;
    }
  }
  return {invoke}
}

let s= cacheFunction(function(n){
  return n*2;
})

console.log(s.invoke(1));
console.log(s.invoke(2));
console.log(s.invoke(3));
console.log(s.invoke(2));
console.log(s.invoke(3));


s.invoke(3);