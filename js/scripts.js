//Helper Functions
function listMaker(array) {
  returnString = array.join("</li><li>");
  return "<li>" + returnString + "</li>";
}


//Business Logic
function neighbor(number) {
  if (typeof number !== 'number' || number !== number || number === Infinity) {
    return null;
  }

  let returnArray = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      returnArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      returnArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      returnArray.push("Beep!");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

//UI Logic
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    $("#output ul").html(listMaker(neighbor(parseInt($("#number-input").val()))));
  });
});