//console.log('hello world');
// ham xu ly bat dong do - thuc thi 1 hanh dong nao do sau 1 mot khoang thoi quy dinh (chi thuc thi hanh dong do duy nhat 1 lan)
// const test = () => {
//   setTimeout(() => {
//     console.log('Het 3 giay roi - chao ban');
//   }, 0);
//   //console.log('Het 3 giay roi - chao ban');
// }
// const demo = () => {
//   console.log('Hi you');
// }

const hocBai = (callback, callback2) => {
  setTimeout(() => {
    console.log('Da hoc bai xong');
    callback(callback2);
  }, 2000)
}
const diNgu = (callback2) => {
  console.log('Di ngu')
  setTimeout(() => {
    callback2();
  }, 3000);
}
const thucDay = () => {
  console.log('6h sang roi day thoi');
}
hocBai(diNgu, thucDay);
//diNgu();
let data = [1,2,3,4,5,6];
// tra ve mang moi chi chua so chan
let condition = item => item % 2 == 0;
let newArr = data.filter(condition);
console.log(newArr);

const myPromies = new Promise((resolve, reject) => {
  // no xu ly giup mh biet cac hanh tien trinh xu ly bat dong bo khi bao xu ly thanh cong khi nao xu ly that bai
  /*
  connect.query('select * from abc', (data, error) => {
    if(error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
  */
  setTimeout(() => {
    if(1+1 > 2){
      reject('That bai')
    } else {
      resolve({name: 'abc', age: 'test'});
    }
  }, 1000);
});
/// can lay dc data tu myPromies tra ve;
myPromies
  .then(data => console.log(data)) // thanh cong (resolve)
  .catch(err => console.log(err)); // that bai (reject)