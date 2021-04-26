// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:


function checkAge(age) {
  if(age > 18){
    return true;
  } else {
    return false;
  }

  }
  console.log(checkAge(20));
   console.log(checkAge(10));


// Write a function min(a,b) which returns the least of two numbers a and b.
  function min(a, b) {
    console.log(Math.min(2, 5));
    console.log(Math.min(3, -1));
    console.log(Math.min(1, 1));
   
  }
  min();

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  function pow(x, n) {
    console.log(Math.pow(3, 2));
    console.log(Math.pow(3, 3));
    console.log(Math.pow(1, 100));
    
  }
  pow();