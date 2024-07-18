function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function cycle(n) {
    // Check if n is coprime with 10
    if (gcd(n, 10) !== 1) {
        return -1;
    }
    
    let remainder = 1 % n;
    const seenRemainders = {};
    let position = 0;

    while (remainder !== 0) {
        if (seenRemainders.hasOwnProperty(remainder)) {
            return position - seenRemainders[remainder];
        }

        seenRemainders[remainder] = position;
        remainder = (remainder * 10) % n;
        position++;
    }
    
    return -1;
}

// Test cases
console.log(cycle(5));  // -1
console.log(cycle(13)); // 6
console.log(cycle(21)); // 6
console.log(cycle(27)); // 3
console.log(cycle(33)); // 2
console.log(cycle(37)); // 3
console.log(cycle(94)); // -1
console.log(cycle(22)); // -1
