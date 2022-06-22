function getRandomNumber(min, max) {
    if (min >= max || min < 0){
        return -1;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);  
}
console.log(getRandomNumber(1,30));



function checkStringLength (stringLength, maxLength){
  if (stringLength.length >= maxLength) {
    return false;
  } 
  return true;
}
checkStringLength('test', 140);

