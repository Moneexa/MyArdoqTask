import { threeElementsHighestProduct } from './highest-product'
describe('three elements highest product function', () => {
    it('should correctly handle one element array', () => {
        expect(() => threeElementsHighestProduct([0])).toThrowError("Array should contain atleast 3 elements");
    });

    it('should throw exception when empty array is there', () => {
        expect(() => threeElementsHighestProduct([])).toThrowError("Array should contain atleast 3 elements");

    });

    it('should throw exception when less than three elements are passed', () => {
        expect(() => threeElementsHighestProduct([0, 1])).toThrowError("Array should contain atleast 3 elements");

    });
    it('should accomodate the reptition of elements', () => {
        expect(threeElementsHighestProduct([-1, -9, -9, -8, 1, -9])).toBe(81)
    });
    it('should not exceed runtime when infinity is passed', () => {
        expect(threeElementsHighestProduct([1, -81, -Infinity, Infinity])).toBe(Infinity)
    });
    it('should accurately display product when all elements are negative', () => {
        expect(threeElementsHighestProduct([-91, -61, -100, -1, -2])).toBe(-122)
    });
    it('should display accurate product when negatives and positives are together', () => {
        expect(threeElementsHighestProduct([0, 1, 3, -9, -8, -7])).toBe(216)
    });
    it('should accurately display product when the elements are all positive', () => {
        expect(threeElementsHighestProduct([1, 10, 2, 6, 5, 3])).toBe(300)

    })
});