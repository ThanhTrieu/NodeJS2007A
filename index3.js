//exports.totalNumber = (a, b) => a + b;
// export ham totalNumber de su dung o noi khac
const totalNumber = (a, b) => a + b;
const kiemTraChanLe = ( n ) => {
  if(n % 2 === 0){
    return true;
  }
  return false;
}
export { totalNumber, kiemTraChanLe };
//export default  totalNumber;