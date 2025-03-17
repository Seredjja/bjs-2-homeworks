function getArrayParams(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (args.length === 0) {
    return 0;
  }
  
  let summ = args.reduce((acc, curr) => acc + curr, 0);
  return summ;
}

function differenceMaxMinWorker(...arr) {
  if (args.length === 0) {
    return 0;
  }
  
  let maxWorker = Math.max(...args);
  let minWorker = Math.min(...args);
  return maxWorker - minWorker;
}

function differenceEvenOddWorker(...arr) {
  if (args.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
    } else {
      sumOddElement += args[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (args.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      sumEvenElement += args[i];
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let resutl = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
