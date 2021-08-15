
const arr = [];
arr.constructor = Date;//无意中修改construtor属性
console.log(arr.constructor === Array);//false
console.log(arr.constructor === Date);//true
// console.log([1,2] instanceof )

function myInstanceof(target,constructor){
  let prototype = Object.getPrototypeOf(target);
    while(prototype){
      if(prototype.constructor === constructor){
        return true
      }else{
        prototype = Object.getPrototypeOf(prototype)
      }
    }
    return false
}
