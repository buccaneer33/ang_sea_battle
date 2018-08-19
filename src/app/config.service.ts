export class ConfigService {

    private _size: string;
    private _pos: string;

    get size(): string {
        return this._size;
        console.log('get in service size ' + this._size);
    }
    set size(thesize: string) {
        this._size = thesize;
        console.log('set in service size ' + this._size);
    }
    ////////////////////////////
    get pos(): string {
        return this._pos;
        console.log('get in service pos ' + this._pos);
    }
    set pos(thepos: string) {
        this._pos = thepos;
        console.log('set in service pos ' + this._pos);
    }

}
