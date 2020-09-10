/// tim hieu class trong js
class A {
  // dinh nghia thuoc tinh
  name = "Van Teo";
  static money = 2000;

  constructor(age){
    console.log(`This is constructor - my age ${age}`);
    // day la phuong thuc co san trong class cua js
    this.address = 'Ha Noi'; // khoi tao thuoc tinh
    this.email = 'test@gmail.com';
  }

  getMyEmail(){
    return this.email;
  }

  // dinh nghia phuong thuc
  getMyName(hello){
    // do LTV tu ding nghia
    return ` ${hello} ${this.name}`;
    // this === A (this chinh la class)
  }

  static getMoney(obj) {
    // trong static no ko ton tai con tro this
    // this === class A
    // can co doi thuong cua class A thay the cho con tro this de lam viec
    //return `Email : ${obj.email} va Name : ${obj.name}`;
    return `my money ${A.money}`;
  }
}
// truy cap vao thuoc tinh 
// khoi tao doi tuong cho class
let a = new A(20);
let b = new A();
console.log(A.getMoney(b));
let myName = a.name;
console.log(myName);
let name = a.getMyName('hi');
console.log(name);
console.log(b.address);
console.log(A.money);
