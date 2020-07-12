const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.


//#1
function keys(obj) {
  return Object.keys(obj);
}

keys(testObject);


//#2
function values(obj) {
  return Object.values(obj)
}

values(testObject);


//#3
function mapObject(obj, cb) {
  for(let x in obj){
    obj[x]=cb(obj[x]);
  }
  return obj;
}

mapObject(testObject,function(n){
  return n=n+" new";
});


//#4
function pairs(obj) {
  let arr=[];
  for(let x in obj){
    arr.push([x,obj[x]]);
  }
  return arr;
}
pairs(testObject);

/* STRETCH PROBLEMS */


//#5
function invert(obj) {
  let result={};
  for(let x in obj){
    result[obj[x]]=x;
  }
  return result;
}

invert(testObject);


//#6
function defaults(obj, defaultProps) {
  for(let x in defaultProps){
    if(!obj[x]){
      obj[x]=defaultProps[x];
    }
  }
  return obj;
}

defaults(testObject,{ name: 'Bruce Wayne', age: 38, location: 'Gotham',random:'x' })
