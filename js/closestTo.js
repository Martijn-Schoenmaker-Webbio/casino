var array = [1, 5, 25, 50, 100];

function closest(array, num){
  var ans = [];
  while (num > 0) {
    var previousNum = "Empty";
    var closestNum;
    for (var i = 0; i < array.length; i++) {
      if (num >= array[i]) {
        var tempDiff = Math.abs(num - array[i]);
        if (previousNum == "Empty") {
          previousNum = tempDiff;
          closestNum = array[i];
        } else if (previousNum > tempDiff) {
          previousNum = tempDiff;
          closestNum = array[i];
        }
      }
    }
    ans.push(closestNum);
    num = num - closestNum;
  }
  return(ans);
}

function closest2(array, num){
  sortedArray = array.sort(function(a, b){return b-a});
  var ans = [];
  while (num > 0) {
    for (var i = 0; i < sortedArray.length; i++) {
      if (num >= sortedArray[i]) {
        var divided = num / sortedArray[i];
        if (divided >= 1) {
          num = num - sortedArray[i];
          ans.push(sortedArray[i]);
          break;
        }
      }
    }
  }
  return(ans);
}

// console.time('Closest 1');
//
// closest([1,5,25, 50 ,100], 2261) // run whatever needs to be timed in between the statements
//
// console.timeEnd('Closest 1');
//
// console.time('Closest 2');
//
// closest2([1,5,25, 50 ,100], 2261) // run whatever needs to be timed in between the statements
//
// console.timeEnd('Closest 2');
