function factorielle(inputNumber) {
    let result = 1;
    for(let count = inputNumber; count >=1; count--){
         result = result * count;
      }
   
    return result;
  }
  inputNumber = prompt("Donne le numero à calculer la factorielle:");
  console.log(factorielle(inputNumber));



