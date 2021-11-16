// unit.test.js


const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// });

//phoneNumber takes 10 digit and 7 digit numbers with hyphens
//otherwise, isPhoneNumber = false;

test('checks if 10 digits with same digits is a Phone Number', () => {
    expect(functions.isPhoneNumber('666-666-6666')).toBe(true);
});

test('checks if abc characters is a Phone Number', () => {
    expect(functions.isPhoneNumber('gotritons')).toBe(false);
});

test('checks if 10 digits without hyphens is a Phone Number', () => {
    expect(functions.isPhoneNumber('3335445555')).toBe(false);
});
test('checks if 7 digit number is a Phone Number', () => {
    expect(functions.isPhoneNumber('544-5555')).toBe(true);
});

//isEmail
//any number of characters of any type before @,
//need . and either 2 or 3 characters after .
//@ symbol

test('checks if ucsd email is a valid email', () => {
    expect(functions.isEmail('a3lee@ucsd.edu')).toBe(true);
});

test('checks if ucsd email without .edu is a valid email', () => {
    expect(functions.isEmail('a3lee@ucsd')).toBe(false);
});

test('checks if email with 2 digit domain is a valid email', () => {
    expect(functions.isEmail('a3lee@ucsd.fr')).toBe(true);
});

test('checks if email without @ in address is a valid email', () => {
    expect(functions.isEmail('ale.ucsd.edu')).toBe(false);
});

//isStrongPassword
//first character has to be letter
//has to have > 3 characters, <15 characters
//can only contain letters, numbers, _

test('checks if 7 digit password is strong', () => {
    expect(functions.isStrongPassword('abc4567')).toBe(true);
});

test('checks if 8 digit password with * (invalid character) is strong', () => {
    expect(functions.isStrongPassword('a*bc4567')).toBe(false);
});

test('checks 7 digit password starting with number is strong', () => {
    expect(functions.isStrongPassword('9abc4567')).toBe(false);
});

test('checks 8 digit password with _ is strong', () => {
    expect(functions.isStrongPassword('abc4_567')).toBe(true);
});

//isDate
//XX / XX / YYYY format
//XX can be 1 or 2 digits long and YYYY is always 4 digits long.

test('checks date with invalid day is valid date', () => {
    expect(functions.isDate('44/44/4444')).toBe(true);
});

test('checks current date is valid date', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('checks date with 2 digit year is invalid date', () => {
    expect(functions.isDate('44/44/44')).toBe(false);
});

test('checks date with invalid spacing is invalid date', () => {
    expect(functions.isDate('44 / 44 / 4444')).toBe(false);
});

//isHexColor
//3 digit code for RGB
//6 digit hex code with hex characters starting with #

test('checks if 255 is HexColor', () => {
    expect(functions.isHexColor('255')).toBe(true);
});

test('checks if 44 (2 digits)  is not HexColor', () => {
    expect(functions.isHexColor('44')).toBe(false);
});

test('checks if f09 is HexColor', () => {
    expect(functions.isHexColor('f09')).toBe(true);
});

test('checks if f0955b7 (7 digits) is not HexColor', () => {
    expect(functions.isHexColor('f0955b7')).toBe(false);
});


