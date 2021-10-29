//Helper Functions

//Business Logic
function neighbor(number) {
  if (typeof number !== 'number') {
    return null;
  }

  let returnArray = [];
  for (let i = 0; i <= number; i++) {
    returnArray.push(i);
  }
  return returnArray;
}

//UI Logic