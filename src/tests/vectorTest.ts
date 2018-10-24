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

describe('Vector.fromArray()', () => {
    it('should copy the coordinates from an Array', () => {
        let output = Vector.fromArray([1, 2]);
        expect(output.x).to.equal(1);
        expect(output.y).to.equal(2);
    });

    it('should copy the coordinates from an Array to a destination Vector', () => {
        let destination = new Vector();
        let output = Vector.fromArray([1, 2], destination);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(1);
        expect(output.y).to.equal(2);
    });
});

describe('Vector.copy()', () => {
    it('should copy the coordinates from a Vector', () => {
        let vector = new Vector(1, 2);
        let output = Vector.copy(vector);
        expect(output).to.not.equal(vector);
        expect(output.x).to.equal(1);
        expect(output.y).to.equal(2);
    });

    it('should copy the coordinates from an Vector to a destination Vector', () => {
        let vector = new Vector(1, 2);
        let destination = new Vector();
        let output = Vector.copy(vector, destination);
        expect(output).to.not.equal(vector);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(1);
        expect(output.y).to.equal(2);
    });
});

describe('Vector.normalize()', () => {
    it('should normalize the Vector', () => {
        let vector = new Vector(1, 2);
        let output = Vector.normalize(vector);
        let normalized = new Vector(vector.x / vector.length, vector.y / vector.length);
        expect(output).to.not.equal(vector);
        expect(output.x).to.equal(normalized.x);
        expect(output.y).to.equal(normalized.y);
    });

    it('should normalize the Vector to a destination Vector', () => {
        let vector = new Vector(1, 2);
        let destination = new Vector();
        let output = Vector.normalize(vector, destination);
        let normalized = new Vector(vector.x / vector.length, vector.y / vector.length);
        expect(output).to.not.equal(vector);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(normalized.x);
        expect(output.y).to.equal(normalized.y);
    });
});

describe('Vector.add()', () => {
    it('should add the two Vectors', () => {
        let a = new Vector(1, 2);
        let b = new Vector(10, 20);
        let output = Vector.add(a, b);
        expect(output.x).to.equal(11);
        expect(output.y).to.equal(22);
    });

    it('should add the two Vectors to a destination Vector', () => {
        let a = new Vector(1, 2);
        let b = new Vector(10, 20);
        let destination = new Vector();
        let output = Vector.add(a, b, destination);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(11);
        expect(output.y).to.equal(22);
    });
});

describe('Vector.dot()', () => {
    it('should return the dot product of the two Vectors', () => {
        let a = new Vector(3, 4);
        let b = new Vector(20, 50);
        let output = Vector.dot(a, b);
        expect(output).to.equal(a.x * b.x + a.y * b.y);
    });
});

describe('Vector.cross()', () => {
    it('should return the cross product of the two Vectors', () => {
        let a = new Vector(3, 4);
        let b = new Vector(20, 50);
        let output = Vector.cross(a, b);
        expect(output).to.equal(a.x * b.y - a.y * b.x);
    });
});

describe('Vector.scalar()', () => {
    it('should multiply a Vector by a scalar', () => {
        let vector = new Vector(1, 2);
        let output = Vector.scalar(5, vector);
        expect(output.x).to.equal(5);
        expect(output.y).to.equal(10);
    });

    it('should multiply a Vector by a scalar to a destination Vector', () => {
        let vector = new Vector(1, 2);
        let destination = new Vector();
        let output = Vector.scalar(5, vector, destination);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(5);
        expect(output.y).to.equal(10);
    });
});

describe('Vector.scalarDivision()', () => {
    it('should divide a Vector by a scalar', () => {
        let vector = new Vector(20, 40);
        let output = Vector.scalarDivision(2, vector);
        expect(output.x).to.equal(10);
        expect(output.y).to.equal(20);
    });

    it('should divide a Vector by a scalar to a destination Vector', () => {
        let vector = new Vector(20, 40);
        let destination = new Vector();
        let output = Vector.scalarDivision(2, vector, destination);
        expect(output).to.equal(destination);
        expect(output.x).to.equal(10);
        expect(output.y).to.equal(20);
    });
});

describe('Vector.angle()', () => {
    it('should find the angle between two Vectors', () => {
        let a = new Vector(0, 1);
        let b = new Vector(1, 0);
        let output = Vector.angle(a, b);
        let angle = Math.PI / 2;
        expect(output).to.equal(angle);
    });
});