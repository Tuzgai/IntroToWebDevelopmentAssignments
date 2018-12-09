function countingCharacters(stringToCount) {
    // The length property has been mentioned in
    // the Logging letter Exercise in Lesson 4
    console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
    // Let's count the number of times a character appears in a string
    // We will look at each character one-by-one with the help of a for loop
    
    var characterCount = 0;
    for (var i=0; i < stringToCount.length; i++) {
        if (stringToCount[i] == characterToFind) {
            characterCount++;
        }
    }
    
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + characterCount);
}