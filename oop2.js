class Person {
  constructor(props){
    this.id = 113;
    this.name = "A";
    this.age = 20;
    console.log(props);
  }
  getId(){
    return this.id;
  }
  getName(){
    return this.name;
  }
}
class Student extends Person {
  constructor(props){
    super(props);
    // chay constructor cua class cha - va nhan tat ca cac tham vao neu co
    console.log(props)
  }
  getName(){
    // override
    return `Hi ${this.name}`;
  }
  showName(){
    // phuong thuc cua class Person hayStudent ?? 
    return super.getName();
  }
  getAge = () => {
    //return this.age;
    // this  === Student
    if(this instanceof Student){
      console.log('Y');
    } else {
      console.log('N');
    }
  }
}
let st = new Student({a: 10, b: 20});
console.log(st.showName());
console.log(st.getAge());