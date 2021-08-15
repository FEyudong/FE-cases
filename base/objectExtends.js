// es5
function Parent(name){
  this.name = name
}
Parent.prototype.sayName = function(){
  console.log(this.name)
}

function Child(age,...p){
  this.age = age;
  Parent.call(this,...p)
}
function create(origin){
  function Constructor(){}
  fn.prototype = origin
  fn.prototype.constructor = origin.constructor
  return new Constructor()
}
Child.prototype = create(Parent.prototype)
Child.prototype.sayAge = function(){
  console.log(this.age)
}
const obj = new Child(18,'lili')
console.log(obj)
obj.sayName()
obj.sayAge()