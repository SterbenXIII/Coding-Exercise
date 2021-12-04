function maxSubarraySum(arr, num) {
    const arrayLength = arr.length;
    if (arrayLength < num) return false;

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arrayLength; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}
console.log(maxSubarraySum([100, 200, 300, 400, ], 1));