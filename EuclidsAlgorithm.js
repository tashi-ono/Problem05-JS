class EuclidsAlgorithm {
  gcd(a, b) {
    if (a === 0) {
      return b;
    } else if (b === 0) {
      return a;
    } else {
      return this.gcd(b, a % b);
    }
  }
}

module.exports = EuclidsAlgorithm;
