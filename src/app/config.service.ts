export class ConfigService {

    private _size: string;
    private _pos: string;
    private _diff: string;
    private _name: string;

    getSize(): string {
        return this._size;
    }
    setSize(theSize: string) {
        if (theSize) {
            this._size = theSize;
          } else {  this._size = 'sizeMedium'; }
        console.log('set in service size ' + this._size);
    }
    ////////////////////////////
    getPos(): string {
        return this._pos;
    }
    setPos(thePos: string) {
        if (thePos) {
            this._pos = thePos;
          } else {    this._pos = 'random'; }
        console.log('set in service pos ' + this._pos);
    }
    /////////
    getDiff(): string {
        return this._diff;
    }
    setDiff(theDiff: string) {
        if (theDiff) {
            this._diff = theDiff;
          } else {     this._diff = 'random'; }
        console.log('set in service diff ' +  this._diff);
    }
    //////
    getName(): string {
        return this._name;
    }
    setName(theName: string) {
        if (theName) {
            this._name = theName;
          } else { this._name = 'Игрок'; }
        console.log('set in service name ' +  this._name);
    }
    constructor() {
    }

}
