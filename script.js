function nbYear(p0, percent, aug, p) {
  let count = 0;
  let convertedPercent = percent / 100;
  let whatYears = p0;
    
  while( whatYears <= p){
    let totalOneYear = whatYears + (whatYears*convertedPercent) + aug;
    
    whatYears = Math.trunc(totalOneYear);  
    count += 1;
    console.log(whatYears);
  }
  console.log(count);
}
/* nbYear(1500, 5, 100, 5000); */

function createPhoneNumber(numbers){
  const formatedNumber = `(${numbers.join('').slice(0,3)}) ${numbers.join('').slice(3,6)}-${numbers.join('').slice(6,10)}`
 
  console.log(formatedNumber);
  return formatedNumber;
}

/* function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
} */

/* createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) */

function solution(str){
  let x;
  for(let i= 0; i<str.length; i = i+2){
  console.log(str[i]+str[i+1]);
   x = str.find('ef')
  }
  console.log(x);

}

solution("abcdef");