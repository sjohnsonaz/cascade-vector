export default class Vector {
    x: number;
    y: number;

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    constructor(x: number = null, y: number = null) {
        this.x = x;
        this.y = y;
    }

    set(x: number = null, y: number = null) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '<' + this.x + ', ' + this.y + '>';
    }

    toArray() {
        return [this.x, this.y];
    }

    static fromArray(array: number[], dest?: Vector) {
        if (dest) {
            dest.x = array[0];
            dest.y = array[1];
            return dest;
        } else {
            return new Vector(array[0], array[1]);
        }
    }

    static copy(a: Vector, dest?: Vector) {
        if (dest) {
            dest.x = a.x;
            dest.y = a.y;
            return dest;
        } else {
            return new Vector(a.x, a.y);
        }
    }

    static normalize(a: Vector, dest?: Vector) {
        let length = a.length;
        if (dest) {
            dest.x = a.x / length;
            dest.y = a.y / length;
            return dest;
        } else {
            return new Vector(a.x / length, a.y / length);
        }
    }

    static add(a: Vector, b: Vector, dest?: Vector) {
        if (dest) {
            dest.x = a.x + b.x;
            dest.y = a.y + b.y;
            return dest;
        } else {
            return new Vector(a.x + b.x, a.y + b.y);
        }
    }

    static dot(a: Vector, b: Vector) {
        return a.x * b.x + a.y * b.y;
    }

    static cross(a: Vector, b: Vector) {
        return a.x * b.y - a.y * b.x;
    }

    static scalar(a: number, b: Vector, dest?: Vector) {
        if (dest) {
            dest.x = a * b.x;
            dest.y = a * b.y;
            return dest;
        } else {
            return new Vector(a * b.x, a * b.y);
        }
    }

    static scalarDivision(a: number, b: Vector, dest?: Vector) {
        if (dest) {
            dest.x = b.x / a;
            dest.y = b.y / a;
            return dest;
        } else {
            return new Vector(b.x / a, b.y / a);
        }
    }

    static angle(a: Vector, b: Vector) {
        return Math.acos(Vector.dot(a, b) / (a.length * b.length));
    }
}