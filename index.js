function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function hello() {
    console.log("A function has a name")
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log("A function has no name")
}