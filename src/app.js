function parseStr(str){

  function parseByPosition(pos, str){
    var parsedStr = [];
    var start = pos*3;
    for(let i=0; i<4; i++){
      parsedStr.push(str[start]);
      parsedStr.push(str[start+1]);
      parsedStr.push(str[start+2]);
      start += 27;
    }
    return parsedStr.join('');
  }

  var strings = [];

  for(let i=0; i<10; i++){
    strings.push(parseByPosition(i, str));
  }

  var keys = [
    ("   " +
     "  |" +
     "  |" +
     "   "),
    (" _ " +
     " _|" +
     "|_ " +
     "   "),
    (" _ " +
     " _|" +
     " _|" +
     "   "),
    ("   " +
     "|_|" +
     "  |" +
     "   "),
    (" _ " +
     "|_ " +
     " _|" +
     "   "),
    (" _ " +
     "|_ " +
     "|_|" +
     "   "),
    (" _ " +
     "  |" +
     "  |" +
     "   "),
    (" _ " +
     "|_|" +
     "|_|" +
     "   "),
    (" _ " +
     "|_|" +
     " _|" +
     "   ")
  ]

  var result = [];

  for(let i=0; i<strings.length; i++){
    for(let j=0; j<keys.length; j++){
      if(strings[i]===keys[j]){
        result.push(j+1);
      }
    }
  }

  return result.join('');
}

function validateAcctNum(acct){
  var count = 1;
  var sum = 0;
  for(let i=8; i>-1; i--){
    sum += acct[i]*count;
    count ++;
  }

  var remainder = sum % 11;

  var checkDigit;
  var checkAgainst = "?";

  if(remainder === 0){
    checkDigit = 0;
  } else if(remainder === 1){
    return false;
  } else {
    checkDigit = 11-remainder;
  }

  if(checkDigit === checkAgainst){
    return true;
  } else {
    return false;
  }
}
