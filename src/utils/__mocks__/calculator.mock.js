import 'jest';

var sum = jest.fn().mockReturnValue(15);
var dif = jest.fn().mockReturnValue(-20);

const calculator = jest.mock('../calculator', () => {
    return {
        sum,
        dif
    };
});

export default calculator;