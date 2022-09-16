import sum from '../../src/utils/sum'


describe('sum', () => {
    it('加法检测',() => {
        expect(sum(1,2)).toEqual(3);
    });
})