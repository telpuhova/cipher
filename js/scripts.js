/*var sentence = prompt("type in a sentence");


var capFirstAndLast = function(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length - 1).toUpperCase();
};

var reverse = function(twoLetters) {
  return twoLetters.charAt(1) + twoLetters.charAt(0);
};

var join = function(sentence) {
  return sentence + reverse(capFirstAndLast(sentence));
};

var middleChar = function(sentence) {
  // return sentence.charAt((sentence.length / 2).floor());
  return sentence.charAt(sentence.length / 2);
};


var temp = middleChar(sentence) + join(sentence);
var result = temp.split("").reverse().join("");
alert(result);
*/

$(document).ready(function() {

  var sentence = prompt("type in a sentence");
  // $("h1").click(function() {
  //   alert(sentence);
  // });
  $(".a").click(function() {
    alert(sentence);
  });

  $(".b").click(function() {
    var capFirstAndLast = function(sentence) {
      return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length - 1).toUpperCase();
    };

    var reverse = function(twoLetters) {
      return twoLetters.charAt(1) + twoLetters.charAt(0);
    };

    var join = function(sentence) {
      return sentence + reverse(capFirstAndLast(sentence));
    };

    var middleChar = function(sentence) {
      // return sentence.charAt((sentence.length / 2).floor());
      return sentence.charAt(sentence.length / 2);
    };


    var temp = middleChar(sentence) + join(sentence);
    var result = temp.split("").reverse().join("");
    alert(result);
  });

  /*$("img").click(function() {
    alert("This is an image.");
  });*/
});
