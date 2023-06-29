const fibonacci = function(member) {
    if (member < 0) {       // try to remake without array
        return "OOPS";
    }
    if (typeof(member) == "string") {
        member = parseInt(member);
    }
    if (member == 1 || member == 2) {
        return 1;
    } else if (member == 0) {
        return 0;
    }
    let array = [];
    let a;
    let b;
    let result;
    for (let i = 1; i <= member - 2; i++) {
        if (i == 1) {
            a = i;
            b = i;
            result = a + b;
            array.push(a);
            array.push(b);
            array.push(result);
        } else {
            a = b;
            b = result;
            result = a + b;
            array.push(result);
        }
    }
    return array[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
