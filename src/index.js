
exports.min = function min (array = []) {
    let minimum = array[0];
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        if (minimum < temp) {
            minimum = minimum
        } else {
minimum = temp
        }
    }
    if (minimum === undefined) {return 0} else {
  return minimum;
}
}

exports.max = function max (array = []) {
    let maximum = array[0]
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        if (maximum > temp) {
            maximum = maximum
        }
        else {
            maximum = temp
        }
    }
    if (maximum === undefined) {return 0} else {
  return maximum;
}
}

exports.avg = function avg (array = []) {
    let newVar = 0;
    for (let i = 0; i < array.length; i++) {
        newVar += array[i]/array.length;
    }
  return newVar.toFixed(2);
}
