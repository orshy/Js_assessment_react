exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: (arr, item) => arr.indexOf(item)
  ,

  sum: (arr) => arr.reduce((prev, current) => prev + current)

    // let sum = 0;

    // for (i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    // return sum;
  ,

  remove: (arr, item) => arr.filter(ret => item !== ret)
  ,

    // ES5
    // let ret = [];

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] !== item) {
    //     ret.push(arr[i]);
    //   }
    // }
    //
    // return ret;

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for(i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append(arr, item) {
    return arr.concat(item);
  },

  truncate(arr) {
    arr.pop();
    return arr;
  },

  prepend(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail(arr) {
    arr.shift(arr);
    return arr;
  },

  concat(arr1, arr2) { return arr1.concat(arr2);
  },

  insert(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates(arr) {
    let result = [...new Set(arr)];
      return result;
  },

  square(arr) {
    let final = [];

    for (let i = 0; i < arr.length; i++) {
      final.push(arr[i] * arr[i]);
    }
    return final;
  },

  findAllOccurrences(arr, target) {
    let final = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        final.push(i);
      }
    }
    return final;
  }
};
