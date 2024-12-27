function randomKey() {
    // A simple example (not truly unique in all cases, but good for demonstration)
    return "key_" + Math.random().toString(36).substring(2, 15);
  }
  
  const rando = randomKey();
  console.log("Rando is " + rando);
  
  const obj = {
    [rando]: 23,
  };
  
  console.log("Object is " + JSON.stringify(obj));
  
  const { [rando]: myKey } = obj;
  
  console.log("My Key is " + myKey); // Output: 23