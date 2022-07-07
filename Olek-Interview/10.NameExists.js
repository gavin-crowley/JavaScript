const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      age: 18,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      age: 30,
    },
  ];
  
  // Soln 1
  // const isNameExists = (name, users) => {
  //   let exists = false;
  //   for (let i = 0; i < users.length; i++) {
  //     if (users[i].name === name) {
  //       exists = true;
  //       break;
  //     }
  //   }
  //   return exists;
  // };
  
  // Soln 2
  // const isNameExists = (name, arr) => arr.some((el)=> el.name === name);
  
  // Soln 3
  // const isNameExists = (name , arr) => {
  //   const el = arr.find((el)=> el.name === name);
  //   return Boolean(el);
  // }
  
  
  //Soln 4
  const isNameExists = (name , arr) => {
    const index = arr.findIndex((el)=> el.name === name);
    return index > 0;
  }
  
  console.log(isNameExists("John", users));