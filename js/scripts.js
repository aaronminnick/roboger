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

function listMaker(array) {
  let returnString = "";
  array.forEach(function(element, i) {
    returnString = returnString + "<li>" + i.toString(2) + ": " + element.toString() +"</li>";
  });
  return returnString;
}

//UI Logic
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    if (parseInt($("#number-input").val()) > 10000) {
      alert("Large input detected. Please be patient as I engage sweater protocol.")
    }
    $("#output ul").html(listMaker(neighbor(parseInt($("#number-input").val()))));
  });
});