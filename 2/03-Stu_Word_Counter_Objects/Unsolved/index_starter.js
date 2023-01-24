// Initialize the function
function wordCount(sentence){
  // Convert string to an array of words
  var sentenceString = sentence.split(" ");

  // An object to hold word frequency
  var totalCharacters = {};

  sentenceString.forEach(function(word){
    if(word in totalCharacters){
      totalCharacters[word] += 1; 
    }else{
      totalCharacters[word] =1; 
    }
  })
  // Iterate through the array and count the occurrence of each word
  console.log(totalCharacters);
return(totalCharacters);
}
//  Call the function with the string as a parameter.
wordCount("I yam what I yam and always will be what I yam");
