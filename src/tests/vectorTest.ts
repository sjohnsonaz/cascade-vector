import { expect } from 'chai';
import { Vector } from '../scripts/modules/Vector';

describe('Vector.constructor', () => {
    it('should store an x and y coordinate', () => {
        let vector = new Vector(1, 2);
        expect(vector.x).to.equal(1);
        expect(vector.y).to.equal(2);
    });

    it('should store null when no parameters are used', () => {
        let vector = new Vector();
        expect(vector.x).to.equal(null);
        expect(vector.y).to.equal(null);
    });
});

describe('Vector.set()', () => {
    it('should store an x and y coordinate', () => {
        let vector = new Vector();
        vector.set(1, 2);
        expect(vector.x).to.equal(1);
        expect(vector.y).to.equal(2);
    });

    it('should store null when no parameters are used', () => {
        let vector = new Vector();
        vector.set();
        expect(vector.x).to.equal(null);
        expect(vector.y).to.equal(null);
    });
});

describe('Vector.length', () => {
    it('should return the Euclidian length', () => {
        let vector = new Vector(1, 2);
        let length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        expect(vector.length).to.equal(length);
    });
});

describe('Vector.toString()', () => {
    it('should return a readable version of the Vector', () => {
        let vector = new Vector(1, 2);
        expect(vector.toString()).to.equal('<1, 2>');
    });
});

describe('Vector.toArray()', () => {
    it('should return the coordinates as an Array', () => {
        let vector = new Vector(1, 2);
        let array = vector.toArray();
        expect(array.length).to.equal(2);
        expect(array[0]).to.equal(1);
        expect(array[1]).to.equal(2);
    });
});