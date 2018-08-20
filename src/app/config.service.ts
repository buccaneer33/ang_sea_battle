export class ConfigService {

    private _size: string;
    private _pos: string;

    getSize(): string {
        return this._size;
    }
    setSize(theSize: string) {
        this._size = theSize;
        console.log('set in service size ' + this._size);
    }
    ////////////////////////////
    getPos(): string {
        return this._pos;
    }
    setPos(thePos: string) {
        this._pos = thePos;
    }
    constructor() {
    }

}
