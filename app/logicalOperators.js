exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  or: function(a, b) {
    return b || a ;
  },

  and: function(a, b) {
    return b && a;
  }
};

//over-thought this ^^
//order doesn't matter.
