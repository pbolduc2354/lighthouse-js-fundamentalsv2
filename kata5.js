const urlEncode = function(text) {
  
  let array = "";

  for (let i = 0; i < text.length; i++) {
    //console.log(text[i])
    
    if (text[i] === " ") {
      array += "%20";
    } else {
      array += text[i];
    }
  }
  return array;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));