var numbers = [256, 144, 4, 64, 49, 100, 625, 1, 16]
var tenOrBelow = [];
var allRoots = [];

for (var i = 0; i < numbers.length; i++) {
    var root = Math.sqrt(numbers[i]);
    allRoots.push(root);
    
    if (root <= 10) {
        tenOrBelow.push(root);
    } 
}

console.log("All square roots:", allRoots);
console.log("Square roots ≤ 10:", tenOrBelow);
