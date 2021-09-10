import 'jest';

import calculator from '../src/utils/__mocks__/calculator.mock';

import * as app from '../src/app';

describe('Testing the use of the \'calculator\' module', () => {
    test('Testing doASum ...', () => {
        expect(app.doASum()).toEqual(15);
    });
});