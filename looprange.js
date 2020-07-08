function range(start,end,step) {
  if (start === undefined || end === undefined || step === undefined || end < start || step <= 0) {return arr  }
  if (start === [] || end === [] || step === [] || end < start || step <= 0) {return []  }
  
    var arr = [];
    for (let i = start; i <= end; i= i+step) {
        arr.push(i);
          }
    return arr;
}

