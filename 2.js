function quotesWithHi(sentence) {
  console.log("Hi " + sentence);
}

function quotesNormal(sentence) {
  console.log(sentence);
}

function output(callback) {
  let phrase = "All is well";
  callback(phrase);
}

function output2(callback) {
  let phrase = "Good things will happen soon";
  callback(phrase);
}

output(quotesWithHi);
output2(quotesNormal);
