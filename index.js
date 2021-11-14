const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let reducer = (previousValue, currentValue) => previousValue + currentValue;

let totalBatteries = batteryBatches.reduce(reducer)

