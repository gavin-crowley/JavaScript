const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
    // return [...arr1, ...arr2];
  };
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8];
  
  console.log(mergeArrays(arr1, arr2));
  
  // concat doesn't mutate arrays
  