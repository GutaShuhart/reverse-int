module.exports = function reverse (n) {
    const a = Math.abs(n)
    const invertedNumber = a.toFixed(0).split('').reverse().join('');
    return invertedNumber; 
}
