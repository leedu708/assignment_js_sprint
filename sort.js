var bubbleSort = function(array) {

  do {
    var madeSwitch = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        madeSwitch = true;
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  } while (madeSwitch);
  
  return array;
};

var mergeSort = function(array) {

  // merging 2 sorted arrays
  var mergeArrays = function(array1, array2) {
    var merged = [];
    var tracker1 = 0;
    var tracker2 = 0;

    while ((tracker1 < array1.length) || (tracker2 < array2.length )) {
      var value1 = array1[tracker1]
      var value2 = array2[tracker2]

      if (typeof value2 === 'undefined' || value1 <= value2) {
        merged.push(value1);
        tracker1++;
      }
      else {
        merged.push(value2);
        tracker2++;
      };
    };

    return merged;
  };

  // Create 1-cell arrays
  result = []
  array.forEach( function(element) {
    result.push([element]);
  } );

  while (result.length > 1) {
    for(i = 0; i < result.length - 1; i++) {
      result.splice(i, 2, mergeArrays(result[i], result[i+1]));
    };
  };

  return result;

};

var quickSort = function(array) {

  var pivotIndexQueue = [[0,(array.length - 1)]];

  var sortPartition = function(indexRange) {
    var firstIndex = indexRange[0];
    var lastIndex = indexRange[1];

    var pivotValue = array[lastIndex];
    var leftSide = array.slice(firstIndex, lastIndex);
    var partitionedSegment = [pivotValue];
    var newPivotIndex = firstIndex;

    leftSide.forEach( function(element) {
      if (element <= pivotValue) {
        partitionedSegment.unshift(element);
        newPivotIndex++;
      }
      else {
        partitionedSegment.push(element);
      };
    });

    //replace leftSide+1 with partitionedSegment
    var args = [firstIndex, leftSide.length + 1].concat(partitionedSegment);
    Array.prototype.splice.apply(array, args);

    //add newPivotIndex to queue
    if (newPivotIndex > firstIndex + 1) {
      pivotIndexQueue.push([firstIndex,newPivotIndex - 1]);
    };
    if (newPivotIndex < lastIndex - 1) {
      pivotIndexQueue.push([newPivotIndex + 1, lastIndex]);
    };
  };

  while (pivotIndexQueue.length > 0) {
    sortPartition(pivotIndexQueue.shift());
  };

};