function findRepeats(sentence){
  words = sentence.split(" ")
  var currentMax = 0
  var mostRepeat = words[0]
  var winners = []
  for (var i = 0; i < words.length; i++){
    letters = words[i].split("")
    hash = {}
    count = 1

    for (var j = 0; j < letters.length; j++){
      if (hash[letters[j]]){
        count++
      }
      else (hash[letters[j]] = true)
    }

    if (count > currentMax){
      currentMax = count
      mostRepeat = words[i]
      winners = []
      winners.push(mostRepeat)
    }
    else if (count === currentMax && count > 1){

      winners.push(words[i])
    }

  }
  var read = winners.join(", ")
  if (winners.length > 1){
    return (console.log("There was a tie for most repeats between " + read))
  }
  
  if (currentMax == 1){
    return console.log("There were no repeated letters")
  }else
   return console.log("The word with the most repeats is " + mostRepeat)
}

console.log("input: 'Helo no repaat plss plss'")
findRepeats("Helo no repaat plss plss")
console.log("--------------------------------------------------------------")
console.log("input: 'This has no repats'")
findRepeats("This has no repats")
console.log("--------------------------------------------------------------")
console.log("input: 'Normal repeat sentence'")
findRepeats("Normal repeat sentence")