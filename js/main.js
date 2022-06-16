function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(1, 100);
console.log(getRandomNumber(1, 100));

function checkStringLength (stringLength, maxLength){
  maxLength = 140;
  stringLength = 'string test';
  if (stringLength.length >= maxLength) {
    return console.log(false);
  } else {
    return console.log(true);
  }

}
checkStringLength();
