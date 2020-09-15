// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value

function partitionOn(pred, items) {
    var f = items.filter(v => !pred(v));
    var t = items.filter(v =>  pred(v));
    items.splice(0); items.push(...f); items.push(...t);
    return f.length;
  }