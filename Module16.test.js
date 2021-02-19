import {getPercent} from './Module16.js';

describe('tests for get percent off number function', () => {
    it('get 20 percent off 200', () => {
     expect(getPercent(20, 200)).toBe(40);
     })

    it('get 0 percent off 200', () => {
        expect(getPercent(0,200)).toBe(0)
        })

    it('if input negative percent', () => {
        expect(getPercent(-20,200)).toBe('Input negative percent')
    })
});

