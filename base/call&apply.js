Function.prototype.myCall = function(thisTarget,...args){
  const fn = this;
  const target = thisTarget || globalThis
  target.fn = fn;
  const r = target.fn(...args)
  delete target.fn;
  return r
}
Function.prototype.myApply = function(thisTarget,args = []){
  const fn = this;
  const target = thisTarget || globalThis
  target.fn = fn;
  const r = target.fn(...args)
  delete target.fn;
  return r
}
Function.prototype.myBind = function(thisTarget,...argsPreset){
  const fn = this;
  return function(...args){
    fn.apply(thisTarget,argsPreset.concat(args))
  }
}
// 测试用例
function fn1(){
  console.log(this,this.a,arguments)
}
const obj = {
  a:'xxx'
}
fn1.myCall(obj,1,2,3) 
fn1.myApply(obj,[1,2,3])
const newFn1 = fn1.myBind(obj,1,2,3)
newFn1(4,5,6)
