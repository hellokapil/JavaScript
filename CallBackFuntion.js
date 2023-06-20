let sum = (param1, param2) => {
    console.log(`${param1} + ${param2} = ${param1+param2}`);
    };
    
    let func = (callback, a, b ) => {
    callback(a, b);
    };
    
    func(sum, 10, 20); //i want to pass arguments to the sum here