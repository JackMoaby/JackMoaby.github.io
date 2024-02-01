/**
 * precisionTimer:
 * A simple precision timer to abstract timing from the codebase
 * @param {String} name - what to call it in the console
 * @param {Number} precision - rounding of the output
 * @param {Function} func - function to call
 * @param {Array} params - parameters for the function as an array (optional)
 * @param {Object} context - an object it needs to use when calling the function (optional)
 * @returns {any} returns the return value of the function
 */
function precisionTimer(name, precision, func, params, context){
  try{
    const funcContext = context || null;

    const precisionStart = performance.now();
    const returnVal = func.call(funcContext, ...params);
    const precisionEnd = performance.now();

    console.log(`[${name}] [RETURN]: ${JSON.stringify(returnVal)}`);
    console.log(`[${name}] [DELTIM]: ${(precisionEnd - precisionStart).toPrecision(precision)}ms`);
    console.log(`[${name}] [ITERPS]: ${Math.floor((1 / ((precisionEnd - precisionStart) / 1_000)))} / s`);

    return returnVal;
  } catch(err){
    console.warn(`[${name}] [RUNERR]: ${err}`)
  }
}

/**
 * precisionTimer:
 * A simple precision timer that calls n times to average running durations
 * @param {String} name - what to call it in the console
 * @param {Number} precision - rounding of the output
 * @param {Number} repetitions - how many times to repeat the test
 * @param {Function} func - function to call
 * @param {Array} params - parameters for the function as an array (optional)
 * @param {Object} context - an object it needs to use when calling the function (optional)
 * @returns {} Nothing is returned.
 */
function precisionTimerRepetitions(name, precision, repetitions, func, params, context){
  try{
    const funcContext = context || null;
    const returnArray = [];
    const timeArray = [];

    for (let i = 0; i < repetitions; i++){
      const precisionStart = performance.now();
      const returnVal = func.call(funcContext, ...params);
      const precisionEnd = performance.now();

      returnArray.push(returnVal);
      timeArray.push(precisionEnd - precisionStart);
    }

    const averageTime = timeArray
      .reduce((accumulator, value) => accumulator + value, 0) / repetitions
    
    console.log(`[${name}] [DELTIM]: ${(averageTime).toPrecision(precision)}ms`);
    console.log(`[${name}] [ITERPS]: ${Math.floor((1 / (averageTime / 1_000)))} / s`);

    return returnArray;
  } catch(err){
    console.warn(`[${name}] [RUNERR]: ${err}`)
  }
}

export { precisionTimer, precisionTimerRepetitions }