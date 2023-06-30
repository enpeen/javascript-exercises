const findTheOldest = function(array) {
    array.map(function(member) {
        if (member.yearOfDeath == undefined) {
            member.yearOfDeath = 2023;
        }
    });
    array.sort(function(a, b) {
        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return 1;
        } else {
            return -1;
        }
    });
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
