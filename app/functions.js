exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => {
    return fn.apply(null, arr);
  },

  speak: (fn, obj) => {
    return fn.call(obj);
  },

  functionFunction: (str) => {
    return (str2) => {
      return str + ", " + str2;
    }
  },

  makeClosures: function(arr, fn) {
    var ret = [];

    var makeFn = function(val) {
      return function() { return fn(val); };
    };

    for(var i = 0;  i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }
    return ret;
  },


  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;

    for(var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {

  }
};
