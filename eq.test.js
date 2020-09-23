const { TestScheduler } = require('jest');
const EuclidsAlgorithm = require('./EuclidsAlgorithm');

test("Test uno", () =>{
    let ea = new EuclidsAlgorithm();
    let expected = ea.gcd(78, 36);
    let actual = 6;
    expect(expected).toEqual(actual);
});

test("Test dos", () =>{
    let ea = new EuclidsAlgorithm();
    let expected = ea.gcd(225, 40);
    let actual = 5;
    expect(expected).toEqual(actual);
});