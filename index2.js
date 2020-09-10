// tim hieu ve generator function
// chi su dung theo dang declare function
function* testGenerator(){
  let index = 0;
  while(index < 3) {
    yield index++;
    // yield : doi cac tien trinh nao do xu ly xong
  }
}
let result = testGenerator();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());