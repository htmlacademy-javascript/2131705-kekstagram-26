function getRandomNumber(min, max) {
    if (min >= max || min < 0){
        return 'ошибка';
    }
    return Math.floor(Math.random() * (max - min + 1) + min);  
}
console.log(getRandomNumber(1,30));



function checkStringLength (stringLength, maxLength){
  if (stringLength.length >= maxLength) {
    console.log(false);
    return false;
  } 
  console.log(true);
  return true;
  
}
checkStringLength('test', 140);

