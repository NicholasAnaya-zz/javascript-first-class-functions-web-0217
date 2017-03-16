function receivesAFunction(coke) {
  return coke();
}

function returnsANamedFunction() {
  return function receivesAFunction() {
    return "blah"
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('Wow!');
  }  
}
